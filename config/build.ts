import { NuxtOptionsBuild } from '@nuxt/types/config/build';

const build: NuxtOptionsBuild = {
  corejs: 3,
  extend(config) {
    config.node = {
      fs: 'empty',
    };
  },
  babel: {
    babelrc: false,
    presets() {
      return [
        '@babel/preset-typescript',
        [
          '@babel/preset-env',
          {
            targets: {
              node: 'current',
            },
          },
        ],
        [
          '@nuxt/babel-preset-app',
          {
            corejs: {
              version: 3,
            },
          },
        ],
      ];
    },
  },
  terser: {
    cache: true,
    parallel: true,
    sourceMap: true,
    terserOptions: {
      ecma: 2020,
      mangle: true,
      module: true,
      sourceMap: true,
    },
  },
};

export default build;
