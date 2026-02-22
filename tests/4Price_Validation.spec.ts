import { test, expect } from '../fixtures/test-fixture';
import { Logger } from '../utils/logger';
import testData from '../testdata/testdata.json';

// test.describe.configure({ mode: 'serial' });

test.beforeAll(async () => {
  Logger.log('Starting Test Suite 4 - Coursera Plus Pricing Validation Tests');
});

test.afterAll(async () => {
  Logger.log('Completed Test Suite 4 - Coursera Plus Pricing Validation Tests');
});

test('Test 4.1 - Navigate to Coursera Plus Page', async ({ homePage }) => {

  await homePage.goto();
  await homePage.openCourseraPlus();

});

test('Test 4.2 - Validate Coursera Plus Pricing Options', async ({ homePage, courseraPlusPage }) => {

  await homePage.goto();
  await homePage.openCourseraPlus();
  const prices = await courseraPlusPage.getPricing();
  prices.forEach(p => Logger.log(p ?? ''));

  const { pricing } = testData;
  expect(prices[2]).toContain(pricing.SingleProgram);
  expect(prices[3]).toContain(pricing.monthlyPrice);
  expect(prices[4]).toContain(pricing.annualPrice);

});


