import { apiConfig } from '../../config/api.config';
import { APIRequestContext } from "playwright/test";

export class TodosPage {
  private baseURL = apiConfig.dummyjson.baseURL;

  constructor(private request: APIRequestContext) {}

  getAllTodos() {
    return this.request.get(`${this.baseURL}/todos`);
  }

  getSingleTodo(todoId: number) {
    return this.request.get(`${this.baseURL}/todos/${todoId}`);
  }
  
  randomTodo() {
    return this.request.get(`${this.baseURL}/todos/random`);
  }

  limitAndSkipTodos(limit: number, skip: number) {
    return this.request.get(`${this.baseURL}/todos`, {
      params: { limit, skip }
    });
  }

  addTodo(todoData: any) {
    return this.request.post(`${this.baseURL}/todos/add`, { data: todoData });
  }

  updateTodo(todoId: number, todoData: any) {
    return this.request.put(`${this.baseURL}/todos/${todoId}`, { data: todoData });
  }

  deleteTodo(todoId: number) {
    return this.request.delete(`${this.baseURL}/todos/${todoId}`);
  }

}