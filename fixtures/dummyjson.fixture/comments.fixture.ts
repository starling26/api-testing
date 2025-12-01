import{test as base} from'@playwright/test';
import {CommentsPage} from '../../pages/dummyjson/comments.page';

export type CommentsFixtures = {
  comments: CommentsPage;
};

export const test = base.extend<CommentsFixtures>({
  comments: async ({ request }, use) => {
    const comments = new CommentsPage(request);
    await use(comments);
  }
});

export { expect } from '@playwright/test';