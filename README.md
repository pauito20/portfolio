# Portfolio — Pau Gargallo Llorens

Portfolio personal one-page: Vite + React 19 + TypeScript + Three.js (React Three Fiber). El
hero es un grafo 3D navegable que conecta módulos de Business Central/ERP con nodos de IA —
cada nodo es también una parada de la navegación del sitio.

## Stack

- Vite 8 + React 19 + TypeScript
- `@react-three/fiber` + `@react-three/drei` + `@react-three/postprocessing` (Three.js)
- Tailwind CSS 4 (`@tailwindcss/vite`, sin `tailwind.config.js`)
- `zustand` (estado de la escena) · `framer-motion` (animaciones de UI)
- i18n propio ES/EN (sin i18next) — ver `src/i18n/`

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:5173
npm run lint
npm run typecheck
npm run build       # tsc -b && vite build
npm run preview     # sirve dist/ localmente
npm run format      # prettier --write .
```

## Estructura

- `src/data/` — todo el contenido (perfil, experiencia, proyectos, skills, grafo) en un solo
  sitio, tipado. `src/data/graph.ts` + `graphLayout.ts` son la fuente única para la escena 3D,
  la navegación accesible (`GraphA11yNav`) y las paradas de cámara (`cameraKeyframes.ts`).
- `src/i18n/` — `es.ts` es la fuente de verdad del diccionario de UI; `en.ts` se valida contra
  su tipo (`satisfies Dict`), así una traducción olvidada es un error de compilación.
- `src/scene/` — la escena Three.js: nodos instanciados (`NodesInstanced`), aristas (`Edges`),
  pulsos de datos con shader propio (`DataPulses`), cámara dirigida por scroll (`CameraRig`).
- `src/components/` — UI de las secciones HTML (el contenido real vive en el DOM, no solo en
  el canvas — importante para SEO y accesibilidad).

## Pendiente antes de publicar

- **`public/cv-pau-gargallo.pdf`** — el botón "Descargar CV" del Hero enlaza a este fichero,
  que no existe todavía. Añadirlo o quitar el botón.
- **`profile.email`** (`src/data/profile.ts`) — actualmente el email corporativo de Lãberit.
  Revisar si conviene un email personal para una web de búsqueda activa de empleo.
- **`public/og.png`** — no existe; la meta `og:image` en `index.html` apunta a él. Sin esta
  imagen, los previews de LinkedIn/Twitter no mostrarán imagen.
- Las URLs de `index.html`/`robots.txt`/`sitemap.xml` asumen el repo `pauito20/portfolio` en
  GitHub Pages. Ajustar si el repo final tiene otro nombre.

## Deploy

GitHub Actions (`.github/workflows/deploy.yml`) construye y publica en GitHub Pages en cada
push a `main`. Requiere activar **Settings → Pages → Source: GitHub Actions** en el repo.
`vite.config.ts` lee `BASE_PATH` del entorno para servir correctamente bajo
`https://<usuario>.github.io/<repo>/`.
