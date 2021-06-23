import { build, head } from './config';

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head,
  // https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-loading
  loading: { color: '#4e7da1' },
  // https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-loading-indicator/
  loadingIndicator: {
    name: 'fading-circle',
    color: '#4e7da1',
    background: 'white',
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    { src: 'mapbox-gl/dist/mapbox-gl.css', lang: 'css' },
    { src: 'v-mapbox/dist/v-mapbox.css', lang: 'css' },
    { src: '~/assets/css/global.css', lang: 'css' },
    { src: '~/assets/css/fonts.css', lang: 'css' },
  ],

  // Nuxt env variables (https://nuxtjs.org/api/configuration-env/)
  env: {
    mapToken: process.env.MAP_TOKEN || '',
    appVersion: process.env.npm_package_version || '0.0.0',
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://composition-api.nuxtjs.org/getting-started/setup#quick-start
    '@nuxtjs/composition-api/module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://color-mode.nuxtjs.org/#tailwind-v18
    '@nuxtjs/color-mode',
  ],
  // Read more: https://tailwindcss.nuxtjs.org/
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: true,
    config: {},
    viewer: false,
  },
  // Read more: https://color-mode.nuxtjs.org/#tailwindcss-dark-mode
  colorMode: {
    // remove -mode suffix for Tailwind Dark mode support
    classSuffix: '',
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://auth.nuxtjs.org/
    '@nuxtjs/auth',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // PWA module configuration (https://go.nuxtjs.dev/pwa)
  pwa: {
    // https://pwa.nuxtjs.org/icon
    icon: {
      source: 'static/icons/icon.png',
      sizes: [64, 120, 144, 152, 192, 384, 512],
    },
    // https://pwa.nuxtjs.org/meta
    meta: {
      name: 'Nuxt, Google Photos & Mapbox',
      theme_color: '#4e7da1',
      author: 'Vinayak Kulkarni',
      lang: 'en',
    },
    // https://pwa.nuxtjs.org/manifest
    manifest: {
      name: 'Nuxt, Google Photos & Mapbox',
      short_name: 'NHM',
      description: 'Render your georeferenced google photos on mapbox-gl map',
      categories: ['Nuxt.js', 'Mapbox', 'Google Photos', 'Web Based GIS'],
      theme_color: '#4e7da1',
      background_color: '#303030',
      lang: 'en',
    },
  },
  // Auth module configuration (https://auth.nuxtjs.org/#getting-started)
  auth: {
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/login',
      home: '/',
    },
    strategies: {
      google: {
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
        code_challenge_method: 'S256',
        grant_type: 'authorization_code',
        authorization_endpoint: 'https://accounts.google.com/o/oauth2/auth',
        userinfo_endpoint: 'https://www.googleapis.com/oauth2/v3/userinfo',
        scope: [
          'openid',
          'profile',
          'email',
          'https://www.googleapis.com/auth/photoslibrary.readonly',
          'https://www.googleapis.com/auth/photoslibrary',
        ],
        response_type: 'token',
        token_type: 'Bearer',
        token_key: 'access_token',
      },
    },
  },
  router: {
    middleware: ['auth'],
  },
  // Read more: https://typescript.nuxtjs.org/guide/lint.html#runtime-lint
  typescript: {
    typeCheck: {
      eslint: {
        enabled: true,
        files: [
          'components/**/*.{ts,js,vue}',
          'config/**/*.{ts,js}',
          'layouts/**/*.{ts,js,vue}',
          'pages/**/*.{ts,js,vue}',
          'utils/**/*.{ts,js}',
        ],
      },
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build,
};
