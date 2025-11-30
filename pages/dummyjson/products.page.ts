import { APIRequestContext } from '@playwright/test';
import { apiConfig } from '../../config/api.config';

export class ProductsPage {
  private baseURL = apiConfig.dummyjson.baseURL;

  constructor(private request: APIRequestContext) {}

  getAllProducts() {
    return this.request.get(`${this.baseURL}/products`, {
      
    });
  }

  getProductById(productId: number = 1) {
    return this.request.get(`${this.baseURL}/products/${productId}`, {
      
    });
  }
  searchProducts(query: string) {
    return this.request.get(`${this.baseURL}/products/search`, {
      params: { q: query }
    });
  }
  GetProductsByCategoryList() {
    return this.request.get(`${this.baseURL}/products/categories`, {
      
    });
  }

  GetAllProductsCategories(){
    return this.request.get(`${this.baseURL}/products/categories`, {
      
    });
  }

  AddNewProduct (){
    return this.request.post(`${this.baseURL}/products/add`, {
        data: { 'price': 999, 'title': 'New Product' }
      
    });
  }
  UpdateAProduct(){
    return this.request.put(`${this.baseURL}/products/1`, {
        data: { 'price': 899, 'title': 'Updated Product'}
      
    });
  }

  DeleteAroduct(){
    return this.request.delete(`${this.baseURL}/products/1`, {
      
    });
  }

}
