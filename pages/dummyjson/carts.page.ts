import { APIRequestContext } from '@playwright/test';
import { apiConfig } from '../../config/api.config';

export class CartsPage {
  private baseURL = apiConfig.dummyjson.baseURL;

  constructor(private request: APIRequestContext) {}

  getAllCarts() {
    return this.request.get(`${this.baseURL}/carts`);
  }

  getAsingleCart(cartId: number) {
    return this.request.get(`${this.baseURL}/carts/${cartId}`);
  }

  addNewCart(cartData: any) {
    return this.request.post(`${this.baseURL}/carts/add`, {
      data: cartData
    });
  }

  updateAcart(cartId: number, cartData: any) {
    return this.request.put(`${this.baseURL}/carts/${cartId}`, {
      data: cartData
    });
  }

  deleteAcart(cartId: number) {
    return this.request.delete(`${this.baseURL}/carts/${cartId}`);
  }

  getUserCarts(userId: number) {
    return this.request.get(`${this.baseURL}/carts/user/${userId}`);
  }

  limitSkipCarts(limit: number, skip: number) {
    return this.request.get(`${this.baseURL}/carts?limit=${limit}&skip=${skip}`);
  }
}