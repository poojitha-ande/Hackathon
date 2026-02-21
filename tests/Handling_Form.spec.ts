import { BrowserContext, Page } from '@playwright/test';
import { test } from '../fixtures/test-fixture';
import { HomePage } from '../pages/HomePage';
import { UniversityFormPage } from '../pages/UniversityFormPage';
import { Logger } from '../utils/logger';

test.describe.configure({ mode: 'serial' });

let context: BrowserContext;
let page: Page;
let home: HomePage;
let formPage: UniversityFormPage;

test.beforeAll(async ({ browser }) => {

  Logger.log('Scenario started3');
  console.log('Scenario started3');

  context = await browser.newContext();
  page = await context.newPage();

  home = new HomePage(page);
  formPage = new UniversityFormPage(page);

});

test.afterAll(async () => {
  await context.close();
  Logger.log('Scenario finished3');
});

test('@smoke University: open and submit form', async () => {

  await home.goto();
  await home.openForUniversities();
  await formPage.fillForm();
  const msg = (await formPage.getErrorMessage()) ?? '';
  Logger.log(msg);

});

test('@smoke University: re-submit and validate error', async () => {

  await formPage.fillForm();
  const msg = (await formPage.getErrorMessage()) ?? '';
  Logger.log(msg);
});


