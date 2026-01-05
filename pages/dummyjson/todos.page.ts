import { APIRequestContext } from '@playwright/test';


export class TodosPage {
  constructor(private request: APIRequestContext) {}


  getAllTodos() {
    return this.request.get(`/todos`);
  }

  getSingleTodo(todoId: any) {
    return this.request.get(`/todos/${todoId}`);
  }
  
  randomTodo() {
    return this.request.get(`/todos/random`);
  }

  limitAndSkipTodos(limit: number, skip: number) {
    return this.request.get(`/todos`, {
      params: { limit, skip }
    });
  }

  addTodo(todoData: any) {
    return this.request.post(`/todos/add`, {
      data: todoData 
    });
  }

  updateTodo(todoId: number, todoData: any) {
    return this.request.put(`/todos/${todoId}`, {
      data: todoData
    });
  }

  deleteTodo(todoId: number) {
    return this.request.delete(`/todos/${todoId}`);
  }

}