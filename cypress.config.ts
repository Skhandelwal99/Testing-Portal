import { defineConfig } from 'cypress'
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor'
import browserify from '@badeball/cypress-cucumber-preprocessor/browserify'

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config)

  on(
    'file:preprocessor',
    browserify(config, {
      typescript: require.resolve('typescript')
    })
  )

  on('before:browser:launch', (browser, launchOptions) => {
    const width = 3840
    const height = 2160

    if (browser.name === 'chrome' && browser.isHeadless) {
      launchOptions.args.push(`--window-size=${width},${height}`)

      // force screen to be non-retina and just use our given resolution
      launchOptions.args.push('--force-device-scale-factor=1')
    }

    // IMPORTANT: return the updated browser launch options
    return launchOptions
  })
}

export default defineConfig({
  env: {
    PASSWORD: 'Apple@1234567890',
  },
  video: false,
  defaultCommandTimeout: 10000,
  viewportWidth: 1920,
  viewportHeight: 1080,
  screenshotsFolder: 'cypress/snapshots/actual',
  trashAssetsBeforeRuns: true,
  e2e: {
    setupNodeEvents,
    testIsolation: false,
    baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/e2e/features/**/*.feature',
    waitForAnimations: false,
  }
})
