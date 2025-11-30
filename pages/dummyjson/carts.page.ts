import { APIRequestContext } from '@playwright/test';
import { apiConfig } from '../../config/api.config';

export class CartsPage{
  private baseURL = apiConfig.dummyjson.baseURL;

  constructor(private request: APIRequestContext) {}

    getAllCarts(){
        return this.request.get(`${this.baseURL}/carts`);
    }
    getAsingleCart(cartId: number){
        return this.request.get(`${this.baseURL}/carts/${cartId}`);
    }
    addNewCart(){
        return this.request.post(`${this.baseURL}/carts/add`, {
            data: { 'userId': 5, 'products': [ { 'productId': 1, 'quantity': 2 }, { 'productId': 50, 'quantity': 1 } ] }
        });
    }
    updateAcart(){
        return this.request.put(`${this.baseURL}/carts/1`, {
            data: { 'userId': 5, 'products': [ { 'productId': 1, 'quantity': 3 }, { 'quantity': 2 } ] }
        });
    }
    deleteAcart(){
        return this.request.delete(`${this.baseURL}/carts/1`);
    }
}