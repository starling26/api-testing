import { test as base, request, expect } from "@playwright/test";
import { PostsPage } from "../../pages/dummyjson/posts.page";
import { apiConfig } from "../../config/api.config";

export const test = base.extend<{ posts: PostsPage }>({
  posts: async ({}, use) => {
    const apiContext = await request.newContext({
      baseURL: apiConfig.dummyjson.baseURL
    });

    const postsPage = new PostsPage(apiContext);

    await use(postsPage);

    await apiContext.dispose();
  }
});

export { expect };