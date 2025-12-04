import { APIRequestContext } from "@playwright/test";

export class CartsPage {

  constructor(private request: APIRequestContext) {}


  getAllCarts() {
    return this.request.get(`/carts`);
  }

  getAsingleCart(id: number) {
    return this.request.get(`/carts/${id}`);
  }

  addNewCart(data: any) {
    return this.request.post(`/carts/add`, { data });
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

  limitSkipCarts(limit: number, skip: number) {
    return this.request.get(`/carts?limit=${limit}&skip=${skip}`);
  }
}