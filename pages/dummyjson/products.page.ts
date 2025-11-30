import { APIRequestContext } from '@playwright/test';
import { apiConfig } from '../../config/api.config';

export class ProductsPage {
  private baseURL = apiConfig.dummyjson.baseURL;

  constructor(private request: APIRequestContext) {}

  getAllProducts() {
    return this.request.get(`${this.baseURL}/products`);
  }

  getProductById(id: number) {
    return this.request.get(`${this.baseURL}/products/${id}`);
  }

  searchProducts(query: string) {
    return this.request.get(`${this.baseURL}/products/search?q=${encodeURIComponent(query)}`);
  }

  getProductsWithPagination(limit: number, skip: number) {
    return this.request.get(`${this.baseURL}/products?limit=${limit}&skip=${skip}`);
  }

  getAllCategories() {
    return this.request.get(`${this.baseURL}/products/categories`);
  }

  getProductsByCategory(category: string) {
    return this.request.get(`${this.baseURL}/products/category/${encodeURIComponent(category)}`);
  }

  addProduct(data: any) {
    return this.request.post(`${this.baseURL}/products/add`, { data });
  }

  updateProduct(id: number, data: any) {
    return this.request.put(`${this.baseURL}/products/${id}`, { data });
  }

  deleteProduct(id: number) {
    return this.request.delete(`${this.baseURL}/products/${id}`);
  }
}