import { APIRequestContext } from 'playwright/test';

export class PostsPage {

  constructor(private context: APIRequestContext) {}

  getAllPosts() {
    return this.context.get(`/posts`);
  }

  getSinglePost(id: number) {
    return this.context.get(`/posts/${id}`);
  }

  searchPost(query: string) {
    return this.context.get(`/posts/search?q=${encodeURIComponent(query)}`);
  }

  sortPosts(sortBy: string, order: 'asc' | 'desc' = 'asc') {
    return this.context.get(`/posts?sortBy=${sortBy}&order=${order}`);
  }


  getPostsByUserId(userId: number) {
    return this.context.get(`/posts/user/${userId}`);
  }
  

  getPostComments(postId: number) {
    return this.context.get(`/posts/${postId}/comments`);
  }



  addPost(data: any) {
    return this.context.post(`/posts/add`, { data });
  }

  updatePost(id: number, data: any) {
    return this.context.put(`/posts/${id}`, { data });
  }

  deletePost(id: number) {
    return this.context.delete(`/posts/${id}`);
  }
}