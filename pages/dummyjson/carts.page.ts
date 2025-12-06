import { APIRequestContext } from "@playwright/test";

export class CartsPage {

  constructor(private request: APIRequestContext) {}


  getAllCarts() {
    return this.request.get(`/carts`);
  }
  getCartByInvalidId(id: any) {
    return this.request.get(`/carts/`, {
      params: { id }
    });
  }

  getAsingleCart(id: number) {
    return this.request.get(`/carts/${id}`);
  }

  addNewCart(data: any) {
    return this.request.post(`/carts`, { data });
  }

  updateAcart(id: number, data: any) {
    return this.request.put(`/carts/${id}`, { data });
  }

  deleteAcart(id: number) {
    return this.request.delete(`/carts/${id}`);
  }

  getcartsByUser(userId: number) {
    return this.request.get(`/carts/user/${userId}`);
  }
  invalidUserId(userId: any) {
    return this.request.get(`/carts/user/`, {
      params: { userId }
    });
  }

  limitSkipCarts(limit: number, skip: number) {
    return this.request.get(`/carts?limit=${limit}&skip=${skip}`);
  }
}