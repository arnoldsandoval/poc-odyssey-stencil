import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { inlineSvg } from 'stencil-inline-svg';
import { resolve, dirname } from 'path';

const ODYSSEY_DIR = dirname(require.resolve('@okta/odyssey/package.json'));

export const config: Config = {
  namespace: 'odyssey-stencil',
  globalScript: 'src/demo.js',
  globalStyle: 'src/demo.scss',
  plugins: [
    inlineSvg(),
    sass({
      includePaths: ['node_modules', resolve('./', 'node_modules')],
      injectGlobalPaths: [
        resolve(ODYSSEY_DIR, 'src/scss/abstracts/functions'),
        resolve(ODYSSEY_DIR, 'src/scss/abstracts/colors'),
        resolve(ODYSSEY_DIR, 'src/scss/abstracts/tokens'),
        resolve(ODYSSEY_DIR, 'src/scss/abstracts/mixins'),
      ]
    })
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service wor  plugins: [inlineSvg()],
    },
  ],
};
