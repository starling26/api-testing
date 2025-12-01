import { APIRequestContext } from '@playwright/test';
import { apiConfig } from '../../config/api.config';

export class CommentsPage {
  private baseURL = apiConfig.dummyjson.baseURL;

  constructor(private request: APIRequestContext) {}

  getAllComments() {
    return this.request.get(`${this.baseURL}/comments`);
  }

  getAsingleComment(commentId: number) {
    return this.request.get(`${this.baseURL}/comments/${commentId}`);
  }

  limitSkipComments(limit: number, skip: number) {
    return this.request.get(`${this.baseURL}/comments?limit=${limit}&skip=${skip}`);
  }

  getCommentsByPostId(postId: number) {
    return this.request.get(`${this.baseURL}/comments?postId=${postId}`);
  }

  addComment(commentData: any) {
    return this.request.post(`${this.baseURL}/comments/add`, { data: commentData });
  }

  updateComment(commentId: number, commentData: any) {
    return this.request.put(`${this.baseURL}/comments/${commentId}`, { data: commentData });
  }

  deleteComment(commentId: number) {
    return this.request.delete(`${this.baseURL}/comments/${commentId}`);
  }

}