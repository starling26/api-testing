import { test, expect } from '../../fixtures/dummyjson.fixture/todos.fixture';
import { TodosData } from '../../testData/todos.data';

test.describe('DummyJSON Todos API Negative Tests', () => {
    
    test('NEG-TC-DJ-TODO-001 - Get Non-existent Todo', async ({ todos }) => {
        const response = await todos.getSingleTodo(99999);
        expect(response.status()).toBe(404);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('message');
    });

    test('NEG-TC-DJ-TODO-002 - Get Todo with Negative ID', async ({ todos }) => {
        const response = await todos.getSingleTodo(-1);
        expect([400, 404]).toContain(response.status());

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('message');
    });

    test('NEG-TC-DJ-TODO-003 - Get Todos with Negative Limit', async ({ todos }) => {
        const response = await todos.limitAndSkipTodos(-1, 0);
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('todos');
    });

    test('NEG-TC-DJ-TODO-004 - Get Todos with Negative Skip', async ({ todos }) => {
        const response = await todos.limitAndSkipTodos(10, -1);
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('todos');
    });

    test('NEG-TC-DJ-TODO-005 - Add Todo with Empty Text', async ({ todos }) => {
        const response = await todos.addTodo({
            todo: '',
            completed: false,
            userId: 1
        });
        expect([201, 200]).toContain(response.status());

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('id');
        expect(responseBody).toHaveProperty('todo', '');
    });

    test('NEG-TC-DJ-TODO-006 - Add Todo with Invalid User ID', async ({ todos }) => {
        const response = await todos.addTodo({
            todo: 'Test todo',
            completed: false,
            userId: -1
        });
        expect([404, 200]).toContain(response.status());

        const responseBody = await response.json();
        if (response.status() === 200) {
            expect(responseBody).toHaveProperty('id');
            expect(responseBody).toHaveProperty('userId', -1);
        } else {
            expect(responseBody).toHaveProperty('message');
        }
    });

    test('NEG-TC-DJ-TODO-007 - Add Todo with Missing Required Fields', async ({ todos }) => {
        const response = await todos.addTodo({} as any);
        expect([400, 200]).toContain(response.status());

        const responseBody = await response.json();
        if (response.status() === 200) {
            expect(responseBody).toHaveProperty('id');
        } else {
            expect(responseBody).toHaveProperty('message');
        }
    });

    test('NEG-TC-DJ-TODO-008 - Update Non-existent Todo', async ({ todos }) => {
        const response = await todos.updateTodo(99999, {
            todo: 'Updated todo',
            completed: true,
            userId: 1
        });
        expect([404, 200]).toContain(response.status());

        const responseBody = await response.json();
        if (response.status() === 200) {
            expect(responseBody).toHaveProperty('id', 99999);
            expect(responseBody).toHaveProperty('todo', 'Updated todo');
        } else {
            expect(responseBody).toHaveProperty('message');
        }
    });

    test('NEG-TC-DJ-TODO-009 - Update Todo with Empty Text', async ({ todos }) => {
        const response = await todos.updateTodo(1, {
            todo: '',
            completed: true,
            userId: 1
        });
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('id', 1);
        // API maintains original value when updating with empty field
        expect(responseBody).toHaveProperty('todo');
        expect(responseBody.todo).not.toBe('');
    });

    test('NEG-TC-DJ-TODO-010 - Update Todo with Invalid User ID', async ({ todos }) => {
        const response = await todos.updateTodo(1, {
            todo: 'Updated todo',
            completed: true,
            userId: -1
        });
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('id', 1);
        expect(responseBody).toHaveProperty('userId', -1);
    });

    test('NEG-TC-DJ-TODO-011 - Delete Non-existent Todo', async ({ todos }) => {
        const response = await todos.deleteTodo(99999);
        expect([404, 200]).toContain(response.status());

        const responseBody = await response.json();
        if (response.status() === 200) {
            expect(responseBody).toHaveProperty('id', 99999);
            expect(responseBody).toHaveProperty('isDeleted', true);
        } else {
            expect(responseBody).toHaveProperty('message');
        }
    });

    test('NEG-TC-DJ-TODO-012 - Delete Todo with Negative ID', async ({ todos }) => {
        const response = await todos.deleteTodo(-1);
        expect([404, 200]).toContain(response.status());

        const responseBody = await response.json();
        if (response.status() === 200) {
            expect(responseBody).toHaveProperty('id', -1);
            expect(responseBody).toHaveProperty('isDeleted', true);
        } else {
            expect(responseBody).toHaveProperty('message');
        }
    });

    test('NEG-TC-DJ-TODO-013 - Add Todo with Very Long Text', async ({ todos }) => {
        const response = await todos.addTodo({
            todo: 'a'.repeat(10000),
            completed: false,
            userId: 1
        });
        
        expect([201, 200]).toContain(response.status());
        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('id');
    });

    test('NEG-TC-DJ-TODO-014 - Add Todo with Non-existent User ID', async ({ todos }) => {
        const response = await todos.addTodo({
            todo: 'Test todo',
            completed: false,
            userId: 99999
        });
        expect([404, 200]).toContain(response.status());

        const responseBody = await response.json();
        if (response.status() === 200) {
            expect(responseBody).toHaveProperty('id');
            expect(responseBody).toHaveProperty('userId', 99999);
        } else {
            expect(responseBody).toHaveProperty('message');
        }
    });

    test('NEG-TC-DJ-TODO-015 - Update Todo with Missing Data', async ({ todos }) => {
        const response = await todos.updateTodo(1, {} as any);
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('id', 1);
    });
});
