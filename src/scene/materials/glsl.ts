/**
 * Shader del pulso de datos: la posición real del quad billboard se calcula
 * en el vertex shader a partir de `aStart`/`aEnd` (no del `instanceMatrix`,
 * que aquí no se usa). Por eso el InstancedMesh que lo use debe llevar
 * `frustumCulled={false}` — su bounding sphere real no reflejaría estas posiciones.
 */
export const pulseVertexShader = /* glsl */ `
  attribute vec3 aStart;
  attribute vec3 aEnd;
  attribute float aOffset;
  attribute float aSpeed;
  attribute float aSize;
  attribute vec3 aColor;

  uniform float uTime;
  uniform float uMotion;

  varying vec2 vUv;
  varying vec3 vColor;
  varying float vFade;

  void main() {
    float t = fract(aOffset + uTime * aSpeed * uMotion);
    vec3 center = mix(aStart, aEnd, t);

    vFade = smoothstep(0.0, 0.14, t) * (1.0 - smoothstep(0.85, 1.0, t));
    vUv = uv;
    vColor = aColor;

    vec4 mv = modelViewMatrix * vec4(center, 1.0);
    mv.xy += position.xy * aSize;
    gl_Position = projectionMatrix * mv;
  }
`;

export const pulseFragmentShader = /* glsl */ `
  precision mediump float;

  varying vec2 vUv;
  varying vec3 vColor;
  varying float vFade;

  void main() {
    float d = length(vUv - 0.5) * 2.0;
    float core = 1.0 - smoothstep(0.0, 0.35, d);
    float halo = pow(1.0 - clamp(d, 0.0, 1.0), 3.0);
    float a = (core + halo * 0.55) * vFade;
    if (a < 0.004) discard;
    gl_FragColor = vec4(vColor, a);
  }
`;
