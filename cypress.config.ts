import { defineConfig } from 'cypress';

export default defineConfig({
  reporter: 'junit',
  includeShadowDom: true,

  component: {
    screenshotsFolder: 'build/component-test-results/screenshots',
    viewportWidth: 1200,
    viewportHeight: 700,
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
    },
    specPattern: '**/*.cy.ts',
    video: false,
    reporterOptions: {
      mochaFile: 'build/component-test-results/junit-report.[hash].xml',
      toConsole: false,
      jenkinsMode: true,
    },
  },
});
