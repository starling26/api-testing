import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Use only 1 worker (sequential test execution) */
  workers: 4,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for API testing and browsers */
  projects: [
    {
      name: 'Dummy API Tests',
      testMatch: ['**/tests/dummyjson/**/*.spec.ts', '**/tests/negative.test.dummyjson/**/*.spec.ts'],
      use: { baseURL: 'https://dummyjson.com' },
    },
    // {
    //   name: 'PlaceHolder API Tests',
    //   testMatch: ['**/tests/placeholder/**/*.spec.ts'],
    //   use: { baseURL: 'https://jsonplaceholder.typicode.com' },
    // },

    // {
    //   name: 'chromium',
    //   use: { ...devices['Desktop Chrome'] },
    // },
  //   {
  //     name: 'firefox',
  //     use: { ...devices['Desktop Firefox'] },
  //   },
  //   {
  //     name: 'webkit',
  
  //   },
  //   {
  //     name: 'Mobile Chrome',
  
  //   },
  //   {
  //     name: 'Mobile Safari',
  //
  //   }
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },


});