import { test as base, request, expect } from "@playwright/test";
import { CommentsPage } from "../../pages/dummyjson/comments.page";
import { apiConfig } from "../../config/api.config";

export const test = base.extend<{ comments: CommentsPage }>({
  comments: async ({}, use) => {
    const apiContext = await request.newContext({
      baseURL: apiConfig.dummyjson.baseURL
    });

    const commentsPage = new CommentsPage(apiContext);

    await use(commentsPage);

    await apiContext.dispose();
  }
});

export { expect };