import { APIRequestContext } from '@playwright/test';
import { apiConfig } from '../../config/api.config';

export class UserPage {
  private baseURL = apiConfig.dummyjson.baseURL;
  constructor(private request: APIRequestContext) {}

  // GET - Get all users
  getAllUsers(){
      return this.request.get(`${this.baseURL}/users`);
  }

  loginUser(credentials: { username: string; password: string }){
      return this.request.post(`${this.baseURL}/auth/login`, { data: credentials });
  }

  getSingleUser(userId: number){
      return this.request.get(`${this.baseURL}/users/${userId}`);
  }

  getAuthUser(token: string){
      return this.request.get(`${this.baseURL}/auth/me`, {
          headers: {
              'Authorization': `Bearer ${token}`
          }
      });
  }

  searchUsers(query: string){
      return this.request.get(`${this.baseURL}/users/search?q=${query}`);
  }

  filterUsers(key: string, value: string){
      return this.request.get(`${this.baseURL}/users/filter?key=${key}&value=${value}`);
  }

  getUsersWithLimitAndSkip(limit: number, skip: number = 0){
      return this.request.get(`${this.baseURL}/users?limit=${limit}&skip=${skip}`);
  }

  getSortedUsers(sortBy: string, order: 'asc' | 'desc' = 'asc'){
      return this.request.get(`${this.baseURL}/users?sortBy=${sortBy}&order=${order}`);
  }

  getAllPostTags(userId: number){
      return this.request.get(`${this.baseURL}/users/${userId}/posts/tags`);
  }

  getPostsByTag(userId: number, tag: string){
      return this.request.get(`${this.baseURL}/users/${userId}/posts?tag=${tag}`);
  }

  getUserCarts(userId: number){
      return this.request.get(`${this.baseURL}/users/${userId}/carts`);
  }

  getUserPosts(userId: number){
      return this.request.get(`${this.baseURL}/users/${userId}/posts`);
  }

  getUserTodos(userId: number){
      return this.request.get(`${this.baseURL}/users/${userId}/todos`);
  }

  // Missing methods for your test plan
  getUsersWithLimitSkipSelect(limit: number, skip: number, select: string){
      return this.request.get(`${this.baseURL}/users?limit=${limit}&skip=${skip}&select=${select}`);
  }

  getAllPostsTags(){
      return this.request.get(`${this.baseURL}/posts/tags`);
  }

  getPostsTagsList(){
      return this.request.get(`${this.baseURL}/posts/tag-list`);
  }

  getPostsByTagGlobal(tag: string){
      return this.request.get(`${this.baseURL}/posts/tag/${tag}`);
  }

  addUser(userData: any){
      return this.request.post(`${this.baseURL}/users/add`, { data: userData });
  }

  updateUser(userId: number, userData: any){
      return this.request.put(`${this.baseURL}/users/${userId}`, { data: userData });
  }

  deleteUser(userId: number){
      return this.request.delete(`${this.baseURL}/users/${userId}`);
  }
}