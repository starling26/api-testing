import { APIRequestContext } from '@playwright/test';

export class CommentsPage {


  constructor(private request: APIRequestContext) {}

  getAllComments() {
    return this.request.get('/comments');
  }

  getAsingleComment(commentId: number) {
    return this.request.get(`/comments/${commentId}`);
  }

  limitSkipComments(limit: number, skip: number) {
    return this.request.get(`/comments?limit=${limit}&skip=${skip}`);
  }

  getCommentsByPostId(postId: number) {
    return this.request.get(`/comments?postId=${postId}`);
  }

  addComment(commentData: any) {
    return this.request.post('/comments/add', { data: commentData });
  }

  updateComment(commentId: number, commentData: any) {
    return this.request.put(`/comments/${commentId}`, { data: commentData });
  }

  deleteComment(commentId: number) {
    return this.request.delete(`/comments/${commentId}`);
  }

}