import App_tsx from './App.tsx.static.ts'
import deps_ts from './deps.ts.static.ts'
import index_html from './index.html.static.ts'
import index_tsx from './index.tsx.static.ts'
import static_css_App_css from './static/css/App.css.static.ts'
import static_css_index_css from './static/css/index.css.static.ts'
import static_favicon_ico from './static/favicon.ico.static.ts'
import static_logo_svg from './static/logo.svg.static.ts'
import tsconfig_json from './tsconfig.json.static.ts'

export default [
  {
    path:'App.tsx',
    content: App_tsx
  },
  {
    path:'deps.ts',
    content: deps_ts
  },
  {
    path:'index.html',
    content: index_html
  },
  {
    path:'index.tsx',
    content: index_tsx
  },
  {
    path:'static/css/App.css',
    content: static_css_App_css
  },
  {
    path:'static/css/index.css',
    content: static_css_index_css
  },
  {
    path:'static/favicon.ico',
    content: static_favicon_ico
  },
  {
    path:'static/logo.svg',
    content: static_logo_svg
  },
  {
    path:'tsconfig.json',
    content: tsconfig_json
  },
]