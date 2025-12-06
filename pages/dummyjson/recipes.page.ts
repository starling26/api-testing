import { APIRequestContext } from '@playwright/test';

export class RecipesPage {
  
  constructor(private request: APIRequestContext) {}

  getAllRecipes() {
    return this.request.get('/recipes');
  }

  getRecipeById(id: any) {
    return this.request.get(`/recipes/${id}`);
  }

  getRecipeByInvalidId(id: any) {
    return this.request.get(`/recipes/`, {
      params: { id: id }
    });
  }

  searchRecipes(query: string) {
    return this.request.get('/recipes/search?', {
      params: { q: query }
    });
  }

  getRecipesWithPagination(limit: number, skip: number) {
    return this.request.get('/recipes?', {
      params: { limit: limit, skip: skip }
    });
  } 

  getRecipesWithInvalidLimitValue(limit: any) {
    return this.request.get(`/recipes?`, {
      params: { limit: limit }
    });
  }

  getSortedRecipes(order: string) {
    return this.request.get(`/recipes?sortBy=name&order=${order}`);
  }

  getAllTags() {
    return this.request.get(`/recipes/tags`, {
      params: {query: ''}
    });
  }

  getRecipesByTag(tag: string) {
    return this.request.get(`/recipes/tag/${tag}`);
  }
  nonExistentTag(tag: string) {
    return this.request.get(`/recipes/tag/`,{
      params: { tag: tag }
    });
  }

  getRecipesByMealType(mealType: string) {
    return this.request.get(`/recipes/meal-type/${mealType}`);
  }

  getRecipesByNonExistentMealType(mealType: string) {
    return this.request.get(`/recipes/meal-type/`, {
      params: { mealType: mealType }
    });
  }

  addRecipe(data: any) {
    return this.request.post(`/recipes/add`, {
      data: data
    });
  }

  updateRecipe(id: number, data: any) {
    return this.request.put(`/recipes/${id}`, {
      data: data
    });
  }

  deleteRecipe(id: number) {
    return this.request.delete(`/recipes/${id}`);
  }
}