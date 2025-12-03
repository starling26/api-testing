import { APIRequestContext } from '@playwright/test';
import { apiConfig } from '../../config/api.config';

export class PostsPage {

  constructor(private request: APIRequestContext) {}

  getAllPosts() {
    return this.request.get(`/posts`);
  }


  getPostById(postId: number) {
    return this.request.get(`/posts/${postId}`);
  }


  createPost(postData: any) {
    return this.request.post(`/posts/add`, { data: postData });
  }

  updatePost(postId: number, postData: any) {
    return this.request.put(`/posts/${postId}`, { data: postData });
  }

  deletePost(postId: number) {
    return this.request.delete(`/posts/${postId}`);
  }

  getAllPostsTags() {
    return this.request.get(`/posts/tags`);
  }

  getPostsTagList() {
    return this.request.get(`/posts/tag-list`);
  }

  getPostsByTag(tag: string) {
    return this.request.get(`/posts/tag/${tag}`);
  }

  getUserPosts(userId: number) {
    return this.request.get(`/posts/user/${userId}`);
  }

  searchPosts(query: string) {
    return this.request.get(`/posts/search?q=${query}`);
  }

  getPostsWithLimitAndSkip(limit: number, skip: number = 0) {
    return this.request.get(`/posts?limit=${limit}&skip=${skip}`);
  }

  getSortedPosts(sortBy: string, order: 'asc' | 'desc' = 'asc') {
    return this.request.get(`/posts?sortBy=${sortBy}&order=${order}`);
  }
}
