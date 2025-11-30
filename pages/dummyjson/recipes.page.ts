import { APIRequestContext } from '@playwright/test';
import { apiConfig } from '../../config/api.config';

export class RecipesPage {
  private baseURL = apiConfig.dummyjson.baseURL;
  
  constructor(private request: APIRequestContext) {}

  getAllRecipes() {
    return this.request.get(`${this.baseURL}/recipes`);
  }

  getRecipeById(id: number) {
    return this.request.get(`${this.baseURL}/recipes/${id}`);
  }

  searchRecipes(query: string) {
    return this.request.get(`${this.baseURL}/recipes/search?q=${encodeURIComponent(query)}`);
  }

  getRecipesWithPagination(limit: number, skip: number) {
    return this.request.get(`${this.baseURL}/recipes?limit=${limit}&skip=${skip}`);
  }

  getSortedRecipes(order: 'asc' | 'desc') {
    return this.request.get(`${this.baseURL}/recipes?sortBy=name&order=${order}`);
  }

  getAllTags() {
    return this.request.get(`${this.baseURL}/recipes/tags`);
  }

  getRecipesByTag(tag: string) {
    return this.request.get(`${this.baseURL}/recipes/tag/${encodeURIComponent(tag)}`);
  }

  getRecipesByMealType(mealType: string) {
    return this.request.get(`${this.baseURL}/recipes/meal-type/${encodeURIComponent(mealType)}`);
  }

  addRecipe(data: any) {
    return this.request.post(`${this.baseURL}/recipes/add`, { data });
  }

  updateRecipe(id: number, data: any) {
    return this.request.put(`${this.baseURL}/recipes/${id}`, { data });
  }

  deleteRecipe(id: number) {
    return this.request.delete(`${this.baseURL}/recipes/${id}`);
  }
}