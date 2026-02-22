import { expect } from '@playwright/test';
import { test } from '../fixtures/test-fixture';
import { Logger } from '../utils/logger';

// test.describe.configure({ mode: 'serial' });

test.beforeAll(async () => {
  Logger.log('Starting Test Suite 3 - University Form Handling Tests');

  // await homePage.goto();
  // await homePage.openForUniversities();

});

test.afterAll(async () => {
  Logger.log('Completed Test Suite 3 - University Form Handling Tests');
});

test('@smoke Test 3.1 - Navigate to University Form Page', async ({ homePage }) => {

  await homePage.goto();
  await homePage.openForUniversities();

});

test('Test 3.2 - Fill University Form and Submit', async ({ homePage, formPage }) => {

  await homePage.goto();
  await homePage.openForUniversities();

  await formPage.fillForm();
  const msg = (await formPage.getErrorMessage()) ?? '';
  Logger.log(msg);

});

test('Test 3.3 - Resubmit Form and Validate Error Message', async ({ homePage, formPage }) => {

  await homePage.goto();
  await homePage.openForUniversities();
  await formPage.fillForm();

  const msg = (await formPage.getErrorMessage()) ?? '';
  Logger.log(msg);
  expect(msg).toContain('Please enter your work email address');

});


