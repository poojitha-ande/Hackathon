import { expect } from '../fixtures/test-fixture';
import { test } from '../fixtures/test-fixture';
import { Logger } from '../utils/logger';
import testData from '../testdata/testdata.json';

type CourseDetails = {

  name: string;
  rating: string | number;
  hours: string | number;
  
};

// test.describe.configure({ mode: 'serial' });

test.beforeAll(async () => {
  Logger.log('Starting Test Suite 1 - Search and Filter Tests');
});

test.afterAll(async () => {
  Logger.log('Completed Test Suite 1 - Search and Filter Tests');
});

test('Test 1.1 - Navigate to Home Page and Search for Course', async ({ homePage }) => {

  await homePage.goto();
  await homePage.searchCourse(testData.search.courseName);

});

test('Test 1.2 - Search and Apply Language and Level Filters', async ({ homePage, searchPage }) => {

  await homePage.goto();
  await homePage.searchCourse(testData.search.courseName);

  await searchPage.filterByLanguage(testData.search.language);
  await searchPage.filterByLevel(testData.search.level);

});

test('Test 1.3 - Read and Validate Top 2 Course Cards Details', async ({ page, homePage, searchPage, courseCard }) => {

  await homePage.goto();
  await homePage.searchCourse(testData.search.courseName);

  await searchPage.filterByLanguage(testData.search.language);
  await searchPage.filterByLevel(testData.search.level);

  for (let i = 0; i < 2; i++) {
    const raw = await courseCard.getCourseDetails(i) as {
      name: string | null;
      rating?: string | number;
      hours?: string | number;
    };
    const details: CourseDetails = {
      name: raw.name ?? '',
      rating: raw.rating ?? '',
      hours: raw.hours ?? '',
    };
    Logger.log(`Course: ${details.name}, Rating: ${details.rating}, Hours: ${details.hours}`);

    let level = (await page.locator(".cds-CommonCard-metadata").nth(i).textContent())?.split('·')[0].trim();
    expect(level).toBe(testData.search.level);
  }
});


// SCENRIO --> EXTRACTING RATING OF WEB DEV CourseCard.apply.apply.

// 1. Navigate to home page
// 2. Search for "Web Development"
// 3. Apply language filter "English"
// 4. Apply level filter "Beginner"
// 5. Read the name and rating of the top course card
