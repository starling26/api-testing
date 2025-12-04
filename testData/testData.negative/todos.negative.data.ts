// testData/testData.negative/todos.negative.data.ts
export const TodosNegativeData = {
  // TC-DJ-TODO-NEG-008: Get Single Todo with Invalid ID
  invalidTodoId: "invalid",

  // TC-DJ-TODO-NEG-009: Get Single Todo with Non-existent ID
  nonExistentTodoId: 99999,

  // TC-DJ-TODO-NEG-010: Get Single Todo with Null ID
  nullTodoId: null,

  // TC-DJ-TODO-NEG-011: Limit Todos with Invalid Limit Value
  invalidNegativeLimit: {
    limit: -5,
    skip: 0
  },

  // TC-DJ-TODO-NEG-012: Limit Todos with Invalid Skip Value
  invalidNegativeSkip: {
    limit: 10,
    skip: -1
  },

  // TC-DJ-TODO-NEG-013: Add Todo with Missing Required Fields
  emptyTodoData: {},

  // TC-DJ-TODO-NEG-014: Add Todo with Invalid User ID
  todoWithInvalidUserId: {
    userId: 99999,
    todo: "Test todo task",
    completed: false
  },

  // TC-DJ-TODO-NEG-015: Update Todo with Non-existent ID
  nonExistentUpdateTodoId: 99999,
  validTodoUpdateData: {
    todo: "Updated todo task",
    completed: true
  },

  // TC-DJ-TODO-NEG-016: Delete Todo with Non-existent ID
  nonExistentDeleteTodoId: 99999,

  // TC-DJ-TODO-NEG-017: Update Todo with Missing Required Fields
  validTodoIdForEmptyUpdate: 1,
  emptyTodoUpdateData: {}
};
