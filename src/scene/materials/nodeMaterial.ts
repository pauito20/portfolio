import * as THREE from "three";

// Parche de MeshStandardMaterial vía onBeforeCompile, verificado contra el
// código fuente instalado de three@0.185.1
// (node_modules/three/src/renderers/shaders/ShaderLib/meshphysical.glsl.js):
// los tags `#include <common>`, `#include <begin_vertex>`, `#include <color_fragment>`
// y `#include <opaque_fragment>` existen tal cual en esa versión. Si una futura
// actualización de three renombra alguno de estos chunks (ocurrió con
// `<output_fragment>` → `<opaque_fragment>` en r152), el `.replace()`
// correspondiente no encuentra la cadena y no hace nada — no rompe el build,
// pero el nodo pierde el degradado/rim silenciosamente. El assert de abajo
// avisa de eso en dev.

export interface NodeMaterialOptions {
  /** Color hacia el que vira la mitad superior de la esfera (degradado). */
  gradientTo: THREE.ColorRepresentation;
  /** Color del rim-light Fresnel en la silueta. */
  rimColor: THREE.ColorRepresentation;
  rimStrength?: number;
  gradientMix?: number;
  /** true → el degradado ondula lentamente ("cinta fluida"), solo para el núcleo. */
  flow?: boolean;
}

export interface NodeMaterial extends THREE.MeshStandardMaterial {
  userData: { uTime: { value: number } };
}

export function createNodeMaterial(opts: NodeMaterialOptions): NodeMaterial {
  const {
    gradientTo,
    rimColor,
    rimStrength = 0.55,
    gradientMix = 0.4,
    flow = false,
  } = opts;

  const mat = new THREE.MeshStandardMaterial({
    color: 0xffffff, // el color base real lo aporta instanceColor (ver NodesInstanced.tsx)
    roughness: 0.22,
    metalness: 0.1,
    envMapIntensity: 0.85,
  }) as NodeMaterial;

  mat.userData = { uTime: { value: 0 } };

  mat.onBeforeCompile = (shader) => {
    shader.uniforms.uTime = mat.userData.uTime;
    shader.uniforms.uGradientTo = { value: new THREE.Color(gradientTo) };
    shader.uniforms.uRimColor = { value: new THREE.Color(rimColor) };
    shader.uniforms.uRimStrength = { value: rimStrength };
    shader.uniforms.uGradientMix = { value: gradientMix };
    shader.uniforms.uFlow = { value: flow ? 1 : 0 };

    const vertexBefore = shader.vertexShader;
    shader.vertexShader = shader.vertexShader
      .replace(
        "#include <common>",
        `#include <common>\nvarying vec3 vLocalPos;`,
      )
      .replace(
        "#include <begin_vertex>",
        `#include <begin_vertex>\nvLocalPos = position;`,
      );

    const fragmentBefore = shader.fragmentShader;
    shader.fragmentShader = shader.fragmentShader
      .replace(
        "#include <common>",
        `#include <common>
         uniform float uTime;
         uniform vec3  uGradientTo;
         uniform vec3  uRimColor;
         uniform float uRimStrength;
         uniform float uGradientMix;
         uniform float uFlow;
         varying vec3  vLocalPos;`,
      )
      // Degradado vertical en espacio local (la geometría es una esfera
      // unitaria, así que vLocalPos.y va de -1 a 1) + ondulación opcional.
      .replace(
        "#include <color_fragment>",
        `#include <color_fragment>
         float band = vLocalPos.y * 0.5 + 0.5;
         band += uFlow * (0.13 * sin(vLocalPos.x * 3.1 + uTime * 0.55)
                        + 0.10 * sin(vLocalPos.z * 2.4 - uTime * 0.41));
         float g = smoothstep(0.08, 0.92, band);
         diffuseColor.rgb *= mix(0.55, 1.30, g);
         diffuseColor.rgb  = mix(diffuseColor.rgb, uGradientTo, g * uGradientMix);`,
      )
      // Rim-light Fresnel: devuelve el volumen que la esfera lisa (sin
      // facetas) pierde frente al icosaedro/octaedro anteriores.
      .replace(
        "#include <opaque_fragment>",
        `float fres = pow(1.0 - clamp(dot(normal, normalize(vViewPosition)), 0.0, 1.0), 3.0);
         outgoingLight += uRimColor * fres * uRimStrength;
         #include <opaque_fragment>`,
      );

    if (import.meta.env.DEV) {
      console.assert(
        shader.vertexShader !== vertexBefore,
        "createNodeMaterial: el parche del vertex shader no encontró sus anclas — revisa los #include de three.js",
      );
      console.assert(
        shader.fragmentShader !== fragmentBefore,
        "createNodeMaterial: el parche del fragment shader no encontró sus anclas — revisa los #include de three.js",
      );
    }
  };

  // Sin esto, three reutilizaría el mismo programa compilado para materiales
  // con distintos uniforms de parche (todos los NodesInstanced comparten
  // shader base, pero cada uno con sus propios colores/flow).
  mat.customProgramCacheKey = () =>
    `node|${gradientTo}|${rimColor}|${rimStrength}|${gradientMix}|${flow}`;

  return mat;
}
