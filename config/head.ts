import { NuxtOptionsHead } from '@nuxt/types/config/head';

const head: NuxtOptionsHead = {
  title: 'Nuxt :: Google Photos & Mapbox',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: '' },
    { name: 'msapplication-TileColor', content: '#303030' },
    { name: 'msapplication-TileImage', content: '/icons/mstile-150x150.png' },

    { name: 'theme-color', content: '#303030' },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/icons/favicon.ico',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/icons/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/icons/favicon-16x16.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/icons/apple-touch-icon.png',
    },
    {
      rel: 'mask-icon',
      href: '/icons/safari-pinned-tab.svg',
      color: '#4e7da1',
    },
  ],
};

export default head;
