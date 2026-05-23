# Haz La Tarea — Landing (Softlanding)

Sitio estático de una sola página para **Haz La Tarea**: marca y servicios de estrategia de negocios y emprendimiento (metodología, servicios, fundadora, testimonios, FAQ y contacto). El contenido visual y de marca se apoya en **Astro** con **React** en modo isla para interactividad donde hace falta.

## Objetivo del proyecto

- Entregar una **landing rápida y indexable** (HTML estático, sitemap y SEO configurable).
- Mantener **buen rendimiento**: Astro genera la mayor parte en estático; los bloques interactivos se hidratan con directivas `client:*`.
- Centralizar **datos del sitio y SEO** en `src/config` para ajustar título, URLs, redes y metadatos sin tocar toda la UI.

## Stack

| Capa | Tecnología |
|------|------------|
| Framework | [Astro 5](https://astro.build/) — salida `static` |
| UI interactiva | [React 19](https://react.dev/) vía `@astrojs/react` (islands) |
| Lenguaje | [TypeScript 5](https://www.typescriptlang.org/) |
| Estilos | [Tailwind CSS 3](https://tailwindcss.com/) + `@astrojs/tailwind` (`applyBaseStyles: false`) |
| Tipografía en contenido | `@tailwindcss/typography` |
| Animaciones | [Framer Motion](https://www.framer.com/motion/) |
| Carruseles | [Swiper](https://swiperjs.com/) |
| Iconos | [React Icons](https://react-icons.github.io/react-icons/) |
| SEO | `@astrojs/sitemap`, metadatos en `seoConfig.ts` / `Layout.astro` |
| PostCSS | `postcss`, `autoprefixer` (cadena típica con Tailwind) |

**URL de producción configurada** en `astro.config.mjs`: `https://www.hazlatarea.la` (ajustar si el dominio cambia).

## Estructura del repositorio

```text
/
├── public/                 # Activos estáticos servidos tal cual (favicon, robots, imágenes)
├── src/
│   ├── components/
│   │   ├── sections/      # Secciones React (Hero, FAQ, testimonios, etc.)
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── SocialNetworks.tsx
│   ├── config/
│   │   ├── site.config.ts # Nombre, colores, nav, contacto, redes
│   │   └── seoConfig.ts   # Títulos, descripciones, Open Graph, keywords por página
│   ├── layouts/
│   │   └── Layout.astro   # Shell HTML, fonts, meta SEO
│   ├── pages/
│   │   └── index.astro    # Composición de la landing
│   └── utils/
│       └── helpers.ts     # Utilidades compartidas
├── astro.config.mjs       # Integraciones React, Tailwind, sitemap
├── tailwind.config.ts     # Theme, breakpoints (xs–4xl), fuentes Impact / AmsiPro
├── tsconfig.json          # Extiende astro/tsconfigs/strict
├── package.json
└── yarn.lock / package-lock.json
```

Tras `build`, el sitio generado queda en **`dist/`** (incluye HTML, assets hashed en `_astro/` y sitemap XML).

## Dependencias principales

**Producción (`dependencies`)**

- `astro` — núcleo del framework
- `@astrojs/react`, `react`, `react-dom` — componentes interactivos
- `@astrojs/tailwind` — integración Tailwind
- `@astrojs/sitemap` — generación de sitemap en build
- `framer-motion` — animaciones
- `swiper` — sliders

**Desarrollo (`devDependencies`)**

- `typescript`, `@types/node`, `@types/react`, `@types/react-dom`
- `tailwindcss`, `@tailwindcss/typography`, `autoprefixer`, `postcss`
- `react-icons`

## Requisitos

- **Node.js** compatible con Astro 5 (recomendado: LTS actual).
- Gestor: el proyecto incluye **`yarn.lock`** y **`package-lock.json`**; el equipo ha definido **Yarn** como referencia.

## Comandos

Ejecutar desde la raíz del proyecto:

| Comando | Descripción |
|---------|-------------|
| `yarn install` | Instala dependencias |
| `yarn dev` | Servidor de desarrollo (por defecto [localhost:4321](http://localhost:4321)) |
| `yarn build` | Compila el sitio estático a `./dist/` |
| `yarn preview` | Previsualiza el build localmente |
| `yarn astro` | CLI de Astro (p. ej. `yarn astro -- check` para comprobación de tipos/plantillas) |

Equivalente con npm: `npm install`, `npm run dev`, `npm run build`, `npm run preview`, `npx astro ...`.

## Notas rápidas

- **Hydration**: en `index.astro` las secciones usan `client:load` o `client:visible` según prioridad y lazy hydration.
- **SEO**: revisar `src/config/seoConfig.ts`, `src/config/site.config.ts` y `public/robots.txt` al cambiar dominio o política de indexación.
- **Fuentes**: familias configuradas en `tailwind.config.ts` (`impact`, `amsi`, `sans`); los archivos de fuente se resuelven según cómo estén enlazados en `Layout.astro` o assets.
