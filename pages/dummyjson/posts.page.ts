import { APIRequestContext } from '@playwright/test';
import { apiConfig } from '../../config/api.config';

export class PostsPage {

  constructor(private request: APIRequestContext) {}

  getAllPosts() {
    return this.request.get(`/posts`);
  }

  getAsinglePost(postId: any) {
    return this.request.get(`/posts/${postId}`);
  }

  searchPost(query: string) {
    return this.request.get(`/posts/search?q=${query}`);
  }
  
  sortPosts(sortBy: string, order: 'asc' | 'desc' = 'asc') {
    return this.request.get(`/posts?sortBy=${sortBy}&order=${order}`);
  }

  getPostsByUserId(userId: number) {
    return this.request.get(`/posts/user/${userId}`);
  }
  getPostComments(postId: number) {
    return this.request.get(`/posts/${postId}/comments`);
  }
  addPost(postData: any) {
    return this.request.post(`/posts/add`, {
      data: postData
    });
  }

  updatePost(postId: number, postData: any) {
    return this.request.put(`/posts/${postId}`, { data: postData });
  }

  deletePost(postId: number) {
    return this.request.delete(`/posts/${postId}`);
  }

}
