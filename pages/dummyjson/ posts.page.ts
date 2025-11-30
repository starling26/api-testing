import { apiConfig } from '../../config/api.config';
import { APIRequestContext } from 'playwright/test';

export class PostsPage {
  private baseURL = apiConfig.dummyjson.baseURL;

  constructor(private context: APIRequestContext) {}

  getAllPosts() {
    return this.context.get(`${this.baseURL}/posts`);
  }

  getSinglePost(id: number) {
    return this.context.get(`${this.baseURL}/posts/${id}`);
  }

  searchPost(query: string) {
    return this.context.get(`${this.baseURL}/posts/search?q=${encodeURIComponent(query)}`);
  }

  sortPosts(sortBy: string, order: 'asc' | 'desc' = 'asc') {
    return this.context.get(`${this.baseURL}/posts?sortBy=${sortBy}&order=${order}`);
  }


  getPostsByUserId(userId: number) {
    return this.context.get(`${this.baseURL}/posts/user/${userId}`);
  }
  

  getPostComments(postId: number) {
    return this.context.get(`${this.baseURL}/posts/${postId}/comments`);
  }



  addPost(data: any) {
    return this.context.post(`${this.baseURL}/posts/add`, { data });
  }

  updatePost(id: number, data: any) {
    return this.context.put(`${this.baseURL}/posts/${id}`, { data });
  }

  deletePost(id: number) {
    return this.context.delete(`${this.baseURL}/posts/${id}`);
  }
}