import { test, expect } from '../../fixtures/dummyjson.fixture/todos.fixture';
import { TodosData } from '../../testData/todos.data';

test.describe('DummyJSON Todos API Tests', () => {
    
    test('TC-DJ-TODO-001 - Get All Todos', async ({ todosPage }) => {
        const response = await todosPage.getAllTodos();
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('todos');
        expect(Array.isArray(responseBody.todos)).toBe(true);
    });
    test('TC-DJ-TODO-002 - Get Single Todo', async ({ todosPage }) => {
        const response = await todosPage.getSingleTodo(TodosData.ids.valid);
        expect(response.status()).toBe(200);

        const todo = await response.json();
        expect(todo).toHaveProperty('id', TodosData.ids.valid);
        expect(todo).toHaveProperty('todo');
        expect(todo).toHaveProperty('completed');
    });

    test('TC-DJ-TODO-003 - Get Random Todo', async ({ todosPage }) => {
        const response = await todosPage.randomTodo();
        expect(response.status()).toBe(200);

        const todo = await response.json();
        expect(todo).toHaveProperty('id');
        expect(todo).toHaveProperty('todo');
        expect(todo).toHaveProperty('completed');
    });
    test('TC-DJ-TODO-007 - Limit & Skip todos', async ({ todosPage }) => {
        const response = await todosPage.limitAndSkipTodos(TodosData.paginations.limit, TodosData.paginations.skip);
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('todos');
        expect(responseBody).toHaveProperty('total', TodosData.paginations.total);
        expect(responseBody).toHaveProperty('skip', TodosData.paginations.skip);
        expect(responseBody).toHaveProperty('limit', TodosData.paginations.limit);

        expect(Array.isArray(responseBody.todos)).toBe(true);
    });

    test('TC-DJ-TODO-004 - Add a New Todo', async ({ todosPage }) => {
        const response = await todosPage.addTodo(TodosData.newTodo);
        expect(response.status()).toBe(201);

        const todo = await response.json();
        expect(todo).toHaveProperty('id');
        expect(todo).toHaveProperty('todo', TodosData.newTodo.todo);
        expect(todo).toHaveProperty('completed', TodosData.newTodo.completed);
    });
    test('TC-DJ-TODO-005 - Update Todo', async ({ todosPage }) => {
        const response = await todosPage.updateTodo(TodosData.updateDataTodo.userId, TodosData.updateDataTodo);
        expect(response.status()).toBe(200);

        const todo = await response.json();
        expect(todo).toHaveProperty('id', TodosData.updateDataTodo.userId);
        expect(todo).toHaveProperty('todo', TodosData.updateDataTodo.todo);
        expect(todo).toHaveProperty('completed', TodosData.updateDataTodo.completed);
    });

    test('TC-DJ-TODO-006 - Delete a Todo', async ({ todosPage }) => {
        const response = await todosPage.deleteTodo(TodosData.ids.pending);
        expect(response.status()).toBe(200);

        const result = await response.json();
        expect(result).toHaveProperty('isDeleted', true);
    });
});