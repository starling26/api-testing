import{test, expect} from"../../fixtures/dummyjson.fixture/todos.fixture";
import{TodosNegativeData} from"../../testData/negative/todos.negative.data";

test.describe("DummyJSON Todos API Negative Tests", () => {

  test("TC-DJ-TODO-NEG-001: Get Single Todo with Invalid ID", async ({todos}) => {
    const response = await todos.getSingleTodo(TodosNegativeData.invalidTodoId);
    expect([400, 404]).toContain(response.status());

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("message");
  });

  test("TC-DJ-TODO-NEG-002: Get Single Todo with Non-existent ID", async ({todos}) => {
    const response = await todos.getSingleTodo(TodosNegativeData.nonExistentTodoId);
    expect(response.status()).toBe(404);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("message");
  });

  test("TC-DJ-TODO-NEG-003: Get Single Todo with Null ID", async ({todos}) => {
    const response = await todos.getSingleTodo(TodosNegativeData.nullTodoId);
    expect([400, 404]).toContain(response.status());

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("message");
  });   

  test.fixme("TC-DJ-TODO-NEG-004: Limit Todos with Invalid Limit Value", async ({todos}) => {
    //This test should fail with 400 Bad Request but DummyJSON API currently allows adding products with missing fields.

    const response = await todos.limitAndSkipTodos(
      TodosNegativeData.invalidNegativeLimit.limit,
      TodosNegativeData.invalidNegativeLimit.skip
    );
    expect(response.status()).toBe(400);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("message");
  });

  test.fixme("TC-DJ-TODO-NEG-005: Limit Todos with Invalid Skip Value", async ({todos}) => {
    //This test should fail with 400 or 404 Bad Request but DummyJSON API currently allows adding products with missing fields.
    const response = await todos.limitAndSkipTodos(
      TodosNegativeData.invalidNegativeSkip.limit,
      TodosNegativeData.invalidNegativeSkip.skip
    );
    expect(response.status()).toBe(400);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("message");
  });

  test("TC-DJ-TODO-NEG-006: Add Todo with Missing Required Fields", async ({todos}) => {
    const response = await todos.addTodo(TodosNegativeData.emptyTodoData);
    expect(response.status()).toBe(400);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("message");
    }); 
    
    test("TC-DJ-TODO-NEG-007: Add Todo with Invalid User ID", async ({todos}) => {
        const response = await todos.addTodo(TodosNegativeData.todoWithInvalidUserId);
        expect(response.status()).toBe(404);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty("message");
    });
    test("TC-DJ-TODO-NEG-008: Update Todo with Non-existent ID", async ({todos}) => {
    const response = await todos.updateTodo(TodosNegativeData.nonExistentUpdateTodoId, TodosNegativeData.validTodoUpdateData);
    expect(response.status()).toBe(404);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("message");
    });

    test("TC-DJ-TODO-NEG-009: Delete Todo with Non-existent ID", async ({todos}) => {
        const response = await todos.deleteTodo(TodosNegativeData.nonExistentDeleteTodoId);
        expect(response.status()).toBe(404);
    
        const responseBody = await response.json();
        expect(responseBody).toHaveProperty("message");
    });

    test.fixme("TC-DJ-TODO-NEG-010: Update Todo with Missing Required Fields", async ({todos}) => {
        //This test should fail with 400 Bad Request but DummyJSON API currently allows adding products with missing fields.
        const response = await todos.updateTodo(TodosNegativeData.validTodoIdForEmptyUpdate, TodosNegativeData.emptyTodoUpdateData);
        expect(response.status()).toBe(400);
    
        const responseBody = await response.json();
        expect(responseBody).toHaveProperty("message");
    });
});