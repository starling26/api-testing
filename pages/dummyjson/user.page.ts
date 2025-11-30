import { APIRequestContext } from '@playwright/test';
import { apiConfig } from '../../config/api.config';

export class userPage{
  private baseURL = apiConfig.dummyjson.baseURL;
  constructor(private request: APIRequestContext) {}

  // GET - Get all users
  getAllUsers(){
      return this.request.get(`${this.baseURL}/users`);
  }

  // GET - Get a single user
  getUserById(userId: number){
      return this.request.get(`${this.baseURL}/users/${userId}`);
  }

  // POST - Login User
  loginUser(credentials: { username: string; password: string }){
      return this.request.post(`${this.baseURL}/auth/login`, { data: credentials });
  }

  // GET - Get auth user
  getAuthUser(token: string){
      return this.request.get(`${this.baseURL}/auth/me`, {
          headers: {
              'Authorization': `Bearer ${token}`
          }
      });
  }

  // GET - Search Users
  searchUsers(query: string){
      return this.request.get(`${this.baseURL}/users/search?q=${query}`);
  }

  // GET - Filter users
  filterUsers(key: string, value: string){
      return this.request.get(`${this.baseURL}/users/filter?key=${key}&value=${value}`);
  }

  // POST - Add user
  createUser(userData: any){
      return this.request.post(`${this.baseURL}/users/add`, { data: userData });
  }

  // GET - Limit & Skip users
  getUsersWithLimitAndSkip(limit: number, skip: number = 0){
      return this.request.get(`${this.baseURL}/users?limit=${limit}&skip=${skip}`);
  }

  // GET - Sort users
  getSortedUsers(sortBy: string, order: 'asc' | 'desc' = 'asc'){
      return this.request.get(`${this.baseURL}/users?sortBy=${sortBy}&order=${order}`);
  }

  // GET - Get all posts tags
  getAllPostsTags(){
      return this.request.get(`${this.baseURL}/posts/tags`);
  }

  // GET - Get posts tag list
  getPostsTagList(){
      return this.request.get(`${this.baseURL}/posts/tag-list`);
  }

  // GET - Get posts by tag
  getPostsByTag(tag: string){
      return this.request.get(`${this.baseURL}/posts/tag/${tag}`);
  }

  // GET - Get user's carts
  getUserCarts(userId: number){
      return this.request.get(`${this.baseURL}/carts/user/${userId}`);
  }

  // GET - Get user's posts
  getUserPosts(userId: number){
      return this.request.get(`${this.baseURL}/posts/user/${userId}`);
  }

  // GET - Get user's todos
  getUserTodos(userId: number){
      return this.request.get(`${this.baseURL}/todos/user/${userId}`);
  }

  // PUT - Update User
  updateUser(userId: number, userData: any){
      return this.request.put(`${this.baseURL}/users/${userId}`, { data: userData });
  }

  // DELETE - Delete User
  deleteUser(userId: number){
      return this.request.delete(`${this.baseURL}/users/${userId}`);
  }
}