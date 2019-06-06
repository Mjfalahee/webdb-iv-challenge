const db = require('../dbConfig');

module.exports = {
    getDishes,
    addDish,
    getDish,
    getRecipes,
    addRecipe
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

//should return the dish with the provided id, and include a list of the related recipes.
function getDish(id) {
    return db
        // .select(['recipes.id', 'recipes.name', 'dishes.name as dishes'])
        // .from('dishes')
        // .join('recipes', 'recipes.dish_id', 'dishes.id')
        // .where('dishes.id', id);
};

//should return a list of all recipes in the database, including the dish they belong to.
function getRecipes() {
    return db
        .select()

};

//should add a recipe to the database and return the id of the new recipe.
function addRecipe(recipe) {
    return db('recipes')
        .insert(recipe);
};