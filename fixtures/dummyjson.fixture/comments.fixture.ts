import { test as base, request, expect } from "@playwright/test";
import { CommentsPage } from "../../pages/dummyjson/comments.page";

export const test = base.extend<{ comments: CommentsPage }>({
  comments: async ({}, use) => {
    const apiContext = await request.newContext();

    const commentsPage = new CommentsPage(apiContext);
    await use(commentsPage);
    await apiContext.dispose();
  }
});

export { expect };