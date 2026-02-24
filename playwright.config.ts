/// <reference types="node" />
// import process from 'process';
import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  testDir: './tests',
  // fullyParallel: true,
  
   reporter: [
    ['html'],
   ['allure-playwright', {
    detail: true,
    outputFolder: 'allure-results',
    suitetitle: false
   }],
  ],
  
  retries: 2,
  workers: process.env.CI ? 2 : undefined, 
  timeout: 60000, // 60 seconds

  use: {
    trace: 'on-first-retry',
    screenshot:'on'  
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
  ]
});