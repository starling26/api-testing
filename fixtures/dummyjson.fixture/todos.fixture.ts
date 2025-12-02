import{test as base} from '@playwright/test';
import { TodosPage } from '../../pages/dummyjson/todos.page';

export const test = base.extend<{
  todosPage: TodosPage;
}>({
  todosPage: async ({ request }, use) => {
    const todosPage = new TodosPage(request);
    await use(todosPage);
  },
});
export { expect } from '@playwright/test';