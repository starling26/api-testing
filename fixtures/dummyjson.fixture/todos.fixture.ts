import { test as base, request, expect } from "@playwright/test";
import { TodosPage } from "../../pages/dummyjson/todos.page";
import { apiConfig } from "../../config/api.config";

export const test = base.extend<{ todos: TodosPage }>({
  todos: async ({}, use) => {
    const apiContext = await request.newContext({
      baseURL: apiConfig.dummyjson.baseURL
    });

    const todosPage = new TodosPage(apiContext);

    await use(todosPage);

    await apiContext.dispose();
  }
});

export { expect };