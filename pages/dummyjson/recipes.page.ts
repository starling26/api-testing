import { APIRequestContext } from '@playwright/test';
import { apiConfig } from '../../config/api.config';

export class recipesPage{
  private baseURL = apiConfig.dummyjson.baseURL;
  constructor(private request: APIRequestContext) {}

    getAllrecipes(){
        return this.request.get(`${this.baseURL}/recipes`);
    }
    getAsingleRecipe(recipeId: number){
        return this.request.get(`${this.baseURL}/recipes/${recipeId}`);
    }
    searchRecipes(query: string){
        return this.request.get(`${this.baseURL}/recipes/search?q=${query}`);
    }
    limitSkipRecipes(limit: number, skip: number){
        
        return this.request.get(`${this.baseURL}/recipes?limit=${limit}&skip=${skip}`);
    }
    sortRecipes(order: 'asc' ){
        return this.request.get(`${this.baseURL}/recipes?sort=${order}`);
    }
    getAllRecipesTags(){
        return this.request.get(`${this.baseURL}/recipes/tags`);
    }
    getAllRecipesByTag(tag: string){
        return this.request.get(`${this.baseURL}/recipes/tag/${tag}`);
    }
    getAllRecipesByMealType(meal: string ){
        return this.request.get(`${this.baseURL}/recipes/meal-type/${meal}`);
    }
    addRecipe(){
        return this.request.post(`${this.baseURL}/recipes/add`, {
            data: { title: 'New Recipe', description: 'Delicious new recipe',
                    "ingredients": [
        "Salmon fillets, skin-on",
        "Fresh lemon juice",
        "Olive oil",
        "Garlic cloves, minced",
        "Fresh dill, chopped",
        "Fresh parsley, chopped",
        "Black pepper",
        "Sea salt",
        "Lemon zest",
        "Butter"
    ], instructions: [
        "In a bowl, mix olive oil, lemon juice, minced garlic, dill, parsley, lemon zest, salt, and pepper.",
        "Place salmon fillets in a shallow dish and pour the marinade over them. Let marinate for 30 minutes.",
        "Preheat grill to medium-high heat and lightly oil the grates.",
        "Grill salmon skin-side down for 6-8 minutes, then carefully flip and cook for another 4-5 minutes.",
        "Top with a small pat of butter and serve immediately with roasted vegetables or a fresh salad."
    ]
            }
        });
    }

}