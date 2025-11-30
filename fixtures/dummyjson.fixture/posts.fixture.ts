import{test as base} from'@playwright/test';
import { PostsPage } from '../../pages/dummyjson/ posts.page';

export type PostsFixtures = {
  posts: PostsPage;
};

export const test = base.extend<PostsFixtures>({
  posts: async ({ request }, use) => {
    const posts = new PostsPage(request);
    await use(posts);
  }
});

export { expect } from '@playwright/test';