const db = require('../dbConfig');

module.exports = {
    getDishes,
    addDish,
    getDish,
    getRecipes,
    addRecipe,
    getRecipesByDishId
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
function getDish(id) {
    return db
        .select(['dishes.name'])
        .from('dishes')
        .where('dishes.id', id)
        .then(getRecipesByDishId(id));
};

//should return a list of all recipes in the database, including the dish they belong to.
function getRecipes() {
    return db
        .select(['recipes.name', 'dishes.name'])
        .from('recipes')
        .join('dishes', 'dishes.id', 'recipes.dish_id')
};

//should add a recipe to the database and return the id of the new recipe.
function addRecipe(recipe) {
    return db('recipes')
        .insert(recipe);
};

//takes a recipe id, and gives a list of ingredients and their quantities to buy
function getShoppingList(id) {

}