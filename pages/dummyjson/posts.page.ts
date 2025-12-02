import { APIRequestContext } from '@playwright/test';
import { apiConfig } from '../../config/api.config';

export class PostsPage {
  private baseURL = apiConfig.dummyjson.baseURL;
  constructor(private request: APIRequestContext) {}

  // GET - Get all posts
  getAllPosts() {
    return this.request.get(`${this.baseURL}/posts`);
  }

  // GET - Get a single post
  getPostById(postId: number) {
    return this.request.get(`${this.baseURL}/posts/${postId}`);
  }

  // POST - Add post
  createPost(postData: any) {
    return this.request.post(`${this.baseURL}/posts/add`, { data: postData });
  }

  // PUT - Update post
  updatePost(postId: number, postData: any) {
    return this.request.put(`${this.baseURL}/posts/${postId}`, { data: postData });
  }

  // DELETE - Delete post
  deletePost(postId: number) {
    return this.request.delete(`${this.baseURL}/posts/${postId}`);
  }

  // GET - Get all posts tags
  getAllPostsTags() {
    return this.request.get(`${this.baseURL}/posts/tags`);
  }

  // GET - Get posts tag list
  getPostsTagList() {
    return this.request.get(`${this.baseURL}/posts/tag-list`);
  }

  // GET - Get posts by tag
  getPostsByTag(tag: string) {
    return this.request.get(`${this.baseURL}/posts/tag/${tag}`);
  }

  // GET - Get user's posts
  getUserPosts(userId: number) {
    return this.request.get(`${this.baseURL}/posts/user/${userId}`);
  }

  // GET - Search posts
  searchPosts(query: string) {
    return this.request.get(`${this.baseURL}/posts/search?q=${query}`);
  }

  // GET - Limit & Skip posts
  getPostsWithLimitAndSkip(limit: number, skip: number = 0) {
    return this.request.get(`${this.baseURL}/posts?limit=${limit}&skip=${skip}`);
  }

  // GET - Sort posts
  getSortedPosts(sortBy: string, order: 'asc' | 'desc' = 'asc') {
    return this.request.get(`${this.baseURL}/posts?sortBy=${sortBy}&order=${order}`);
  }
}
