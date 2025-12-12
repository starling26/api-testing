import { APIRequestContext } from "@playwright/test";
import { ProductsNegativeData } from "../../testData/negative/products.negative.data";

export class ProductsPage {

  constructor(private request: APIRequestContext) {}

  getAllProducts() {
    return this.request.get(`/products`);
  }
  getProductById(productId: number) {
    return this.request.get(`/products/${productId}`);
  } 

  // Method for negative tests that accepts any type of ID
  getProductByInvalidId(productId: any) {
    return this.request.get(`/products/${productId}`);
  }

  getSingleProduct(productId: number) {
    return this.request.get(`/products/${productId}`);
  }

  searchProducts(query: string) {
    return this.request.get(`/products/search`, {
      data: { q: query }
    });
  }
  searchProductsWithEmptyQuery(query: string) {
    return this.request.get(`/products/search`, {
      data: { empty: query }
    });
  }

  getProductsByNonExistentCategory(query: string) {
    return this.request.get(`/products/category/`,{
      data: { category: query }
    });
  }

  getProductsByCategoryList() {
    return this.request.get(`/products/categories`);
  }

  getAllProductsCategories() {
    return this.request.get(`/products/categories`);
  }

  addNewProduct(product: { title: string; price: number }) {
    return this.request.post(`/products/add`, {
      data: product
    });
  }

  addProductWithMissingFields(product: { title: string; price: number }) {
    return this.request.post(`/products/add`, {
      data: product
    });
  }

  updateProduct(productId: number, product: any) {
    return this.request.put(`/products/${productId}`, {
      data: product
    });
  }

  updateProductWithNonExistentId(productId: number, product: any) {
    return this.request.put(`/products/${productId}`, {
      data: product
    });
  }

  deleteProduct(productId: number) {
    return this.request.delete(`/products/${productId}`);
  }
}