import { defineConfig } from '@playwright/test';

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
  reporter: [
    ['html'],
    ['allure-playwright'],
    // JUnit reporter for Azure DevOps Test Results integration
    ['junit', { outputFile: 'test-results/junit-report.xml' }],
  ],
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Use only 1 worker (sequential test execution) */
  workers: 4,
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry'
  },

  /* Configure projects for API testing and browsers */
  projects: [
    {
      name: 'Dummy API Tests',
      testMatch: ['**/tests/dummyjson/**/*.spec.ts', '**/tests/negative.test.dummyjson/**/*.spec.ts'],
      use: { 
        baseURL: 'https://dummyjson.com',
        /* Disable screenshots and videos for API tests */
        screenshot: 'off',
        video: 'off'
      }
    }
  ],
});