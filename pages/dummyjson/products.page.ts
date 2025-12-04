import { APIRequestContext } from "@playwright/test";
import { apiConfig } from "../../config/api.config";

export class ProductsPage {

  constructor(private request: APIRequestContext) {}

  getAllProducts() {
    return this.request.get(`/products`);
  }

  getSingleProduct(productId: number) {
    return this.request.get(`/products/${productId}`);
  }

  searchProducts(query: string) {
    return this.request.get(`/products/search?q=${query}`);
  }

  getProductsByCategoryList() {
    return this.request.get(`/products/categories`);
  }

  getAllProductsCategories() {
    return this.request.get(`/products/categories`);
  }

  getProductsByCategory(category: string) {
    return this.request.get(`/products/category/${category}`);
  }

  limitSkipProducts(limit: number, skip: number) {
    return this.request.get(`/products?limit=${limit}&skip=${skip}`);
  }

  addNewProduct(product: { title: string; price: number }) {
    return this.request.post(`/products/add`, {
      data: product
    });
  }

  addProduct(product: any) {
    return this.request.post(`/products/add`, {
      data: product
    });
  }

  updateProduct(productId: number, product: any) {
    return this.request.put(`/products/${productId}`, {
      data: product
    });
  }

  deleteProduct(productId: number) {
    return this.request.delete(`/products/${productId}`);
  }
}