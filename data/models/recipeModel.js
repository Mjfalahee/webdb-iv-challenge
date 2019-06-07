const db = require('../dbConfig');
const knex = require('knex');

module.exports = {
    getDishes,
    addDish,
    getDish,
    getRecipes,
    addRecipe,
    getRecipesByDishId,
    getRecipe
}

//should return a list of all dishes in the database.
function getDishes() {
    return db('dishes');
};

//should add the dish to the database and return the id of the new dish.
function addDish(dish) {
    return db('dishes')
        .insert(dish);
};

function getRecipesByDishId(id) {
    return db
        .select(['recipes.name'])
        .from('recipes')
        .where('recipes.dish_id', id);
}

//should return the dish with the provided id, and include a list of the related recipes.
async function getDish(id) {
    let dish = await db
        .select(['dishes.name'])
        .from('dishes')
        .where('dishes.id', id)
        .first()
    let result = await getRecipesByDishId(id)
    return {
        ...dish,
        recipes: result.map(recipe => {
            return recipe.name;
        })
    }
};

//should return a list of all recipes in the database, including the dish they belong to.
function getRecipes() {
    return db
        .select(['recipes.id', 'recipes.name', 'dishes.name as dish'])
        .from('recipes')
        .join('dishes', 'dishes.id', 'recipes.dish_id')
};

//should add a recipe to the database and return the id of the new recipe.
function addRecipe(recipe) {
    return db('recipes')
        .insert(recipe);
};


//should return the recipe with the provided id. The recipe should include -- name of the dish, name of the recipe, list of ingredients with quantity.
function getRecipe(id) {
   return db
        .select(['recipes.name as recipe', 'dishes.name as dish', knex.raw("GROUP_CONCAT(ingredients.name) as ingredients")])
        .from('recipes')
        .join('recipe_ingredients', 'recipes.id', 'recipe_ingredients.recipe_id')
        .join('ingredients', 'recipe_ingredients.ingredient_id', 'ingredients.id')
        .join('dishes', 'recipes.dish_id', 'dishes.id')
        .where('recipes.id', id)
}

//takes a recipe id, and gives a list of ingredients and their quantities to buy
function getShoppingList(id) {

}


  // let rec = await db
    //             .select(['recipes.name as recipe', 'recipe_ingredients.amount'])
    //             .from('recipe_ingredients')
    //             .join('recipes', 'recipes.id', 'recipe_ingredients.recipe_id')
    //             .where('recipes.id', id)

    // let ingres = await db
    //             .select(['ingredients.name as ingredient', 'ingredients.units'])
    //             .from('recipe_ingredients')
    //             .join('ingredients', 'ingredients.id', 'recipe_ingredients.ingredient_id')
    //             .where('recipe_ingredients.recipe_id', id)

    // let dish = await db
    //             .select(['dishes.name as dish'])
    //             .from('recipes')
    //             .join('dishes', 'dishes.id', 'recipes.dish_id')
    //             .where('recipes.id', id)

    // return {
    //     recipe: rec.recipe,
    //     dish: dish.dish,
    //     ingredients: ingres.map(ingredient => {
    //         return ingredient.ingredient;
    //     }),
    //     amounts: recipe.map(recipe => {
    //         return recipe_ingredients.amount;
    //     })
    // }