import { test as base, Page, BrowserContext } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SearchPage } from '../pages/SearchPage';
import { UniversityFormPage } from '../pages/UniversityFormPage';
import { CourseraPlusPage } from '../pages/CourseraPlusPage';
import { CourseCard } from '../components/CourseCard';

// Define custom fixture types
type CustomFixtures = {
  homePage: HomePage;
  searchPage: SearchPage;
  formPage: UniversityFormPage;
  courseraPlusPage: CourseraPlusPage;
  courseCard: CourseCard;
};

export const test = base.extend<CustomFixtures>({
  // Auto-initialize HomePage
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },

  // Auto-initialize SearchPage
  searchPage: async ({ page }, use) => {
    const searchPage = new SearchPage(page);
    await use(searchPage);
  },

  // Auto-initialize UniversityFormPage
  formPage: async ({ page }, use) => {
    const formPage = new UniversityFormPage(page);
    await use(formPage);
  },

  // Auto-initialize CourseraPlusPage
  courseraPlusPage: async ({ page }, use) => {
    const courseraPlusPage = new CourseraPlusPage(page);
    await use(courseraPlusPage);
  },

  // Auto-initialize CourseCard
  courseCard: async ({ page }, use) => {
    const courseCard = new CourseCard(page);
    await use(courseCard);
  },
});

export { expect } from '@playwright/test';
