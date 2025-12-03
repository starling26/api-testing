import { APIRequestContext } from '@playwright/test';

export class RecipesPage {
  
  constructor(private request: APIRequestContext) {}

  getAllRecipes() {
    return this.request.get('/recipes');
  }

  getRecipeById(id: number) {
    return this.request.get(`/recipes/${id}`);
  }

  searchRecipes(query: string) {
    return this.request.get(`/recipes/search?q=${encodeURIComponent(query)}`);
  }

  getRecipesWithPagination(limit: number, skip: number) {
    return this.request.get(`/recipes?limit=${limit}&skip=${skip}`);
  }

  getSortedRecipes(order: 'asc' | 'desc') {
    return this.request.get(`/recipes?sortBy=name&order=${order}`);
  }

  getAllTags() {
    return this.request.get(`/recipes/tags`);
  }

  getRecipesByTag(tag: string) {
    return this.request.get(`/recipes/tag/${encodeURIComponent(tag)}`);
  }

  getRecipesByMealType(mealType: string) {
    return this.request.get(`/recipes/meal-type/${encodeURIComponent(mealType)}`);
  }

  addRecipe(data: any) {
    return this.request.post(`/recipes/add`, { data });
  }

  updateRecipe(id: number, data: any) {
    return this.request.put(`/recipes/${id}`, { data });
  }

  deleteRecipe(id: number) {
    return this.request.delete(`/recipes/${id}`);
  }
}