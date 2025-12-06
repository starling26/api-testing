export const RecipesData = {
  ids: {
    valid: 1,
    invalid: -1,
    notFound: 999999
  },

  search: {
    valid: 'Margherita',
    noResults: 'xyznotfound123',
    partial: 'pizza'
  },

  pagination: {
    limit: 5,
    skip: 10
  },

  sort: {
    ascending: 'asc',
    descending: 'desc'
  },

  tags: {
    pakistani: 'Pakistani',
    dessert: 'Dessert',
    breakfast: 'Breakfast'
  },

  mealTypes: {
    snack: 'snack',
    breakfast: 'breakfast',
    lunch: 'lunch',
    dinner: 'dinner'
  },

  newRecipe: {
    id: 51,
    title: 'New Recipe',
    description: 'Delicious new recipe',
    ingredients: ['Ingredient 1', 'Ingredient 2'],
    instructions: ['Step 1', 'Step 2']
  },

  updateRecipe: {
    name: 'Grilled',
    ingredients: ['Updated ingredient 1', 'Updated ingredient 2']
  },

  expected: {
    totalRecipes: 50,
    totalTags: 87,
    pakistaniRecipes: 7,
    snackRecipes: 3,
    defaultLimit: 30
  }
};