import { APIRequestContext } from '@playwright/test';

export class UserPage {
  constructor(private request: APIRequestContext) {}

 
  getAllUsers(){
      return this.request.get(`/users`);
  }

  loginUser(credentials: { username: string; password: string }){
      return this.request.post(`/auth/login`, { data: credentials });
  }

  getSingleUser(userId: number){
      return this.request.get(`/users/${userId}`);
  }

  getAuthUser(token: string){
      return this.request.get(`/auth/me`, {
          headers: {
              'Authorization': `Bearer ${token}`
          }
      });
  }

  searchUsers(query: string){
      return this.request.get(`/users/search?q=${query}`);
  }

  filterUsers(key: string, value: string){
      return this.request.get(`/users/filter?key=${key}&value=${value}`);
  }

  getUsersWithLimitAndSkip(limit: number, skip: number = 0){
      return this.request.get(`/users?limit=${limit}&skip=${skip}`);
  }

  getSortedUsers(sortBy: string, order: 'asc' | 'desc' = 'asc'){
      return this.request.get(`/users?sortBy=${sortBy}&order=${order}`);
  }

  getAllPostTags(userId: number){
      return this.request.get(`/users/${userId}/posts/tags`);
  }

  getPostsByTag(userId: number, tag: string){
      return this.request.get(`/users/${userId}/posts?tag=${tag}`);
  }

  getUserCarts(userId: number){
      return this.request.get(`/users/${userId}/carts`);
  }

  getUserPosts(userId: number){
      return this.request.get(`/users/${userId}/posts`);
  }

  getUserTodos(userId: number){
      return this.request.get(`/users/${userId}/todos`);
  }

  // Missing methods for your test plan
  getUsersWithLimitSkipSelect(limit: number, skip: number, select: string){
      return this.request.get(`/users?limit=${limit}&skip=${skip}&select=${select}`);
  }

  getAllPostsTags(){
      return this.request.get(`/posts/tags`);
  }

  getPostsTagsList(){
      return this.request.get(`/posts/tag-list`);
  }

  getPostsByTagGlobal(tag: string){
      return this.request.get(`/posts/tag/${tag}`);
  }

  addUser(userData: any){
      return this.request.post(`/users/add`, { data: userData });
  }

  updateUser(userId: number, userData: any){
      return this.request.put(`/users/${userId}`, { data: userData });
  }

  deleteUser(userId: number){
      return this.request.delete(`/users/${userId}`);
  }
}