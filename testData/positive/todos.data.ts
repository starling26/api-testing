export const TodosData = {
  ids: {
    valid: 1,
    completed: 2,
    pending: 4,
    notFound: 999999
  },

  singleTodo: {
    id: 15,
    todo: "Buy a new house decoration",
    completed: true,
    userId: 105
  },

  newTodo: {
    todo: "Complete API testing project",
    completed: false,
    userId: 1
  },

  updateDataTodo: {

    todo: "Updated: Do something nice for someone you care about",
    completed: true,
    userId: 152
  },

  filters: {
    completed: {
      true: true,
      false: false
    },
    userId: {
      valid: 13,
      multiple: 162,
      notFound: 999999
    }
  },

  users: {
    withMultipleTodos: 162,
    withCompletedOnly: 76,
    withPendingOnly: 152,
    noTodos: 999
  },
  paginations: { 
    total: 254,
    skip: 10,
    limit: 3
  }
};
