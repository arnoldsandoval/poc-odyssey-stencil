import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { dirname, resolve } from 'path';
import { inlineSvg } from 'stencil-inline-svg';

const ODYSSEY_DIR = dirname(require.resolve('@local/odyssey/package.json'));

export const config: Config = {
  namespace: 'odyssey-stencil',
  globalScript: 'src/demo.js',
  globalStyle: 'src/demo.scss',
  plugins: [
    inlineSvg(),
    sass({
      includePaths: ['node_modules', resolve('./', 'node_modules')],
      injectGlobalPaths: [resolve(ODYSSEY_DIR, 'src/scss/_globals.scss')],
    }),
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service worker
    },
  ],
};
