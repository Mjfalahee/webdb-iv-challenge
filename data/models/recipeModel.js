const db = require('../dbConfig');

module.exports = {
    getDishes,
    addDish,
    getDish,
    getRecipes,
    addRecipe
}

function getDishes() {
    return db('dishes');
}

function addDish(dish) {

}

function getDish(id) {

}

function getRecipes() {

}

function addRecipe(recipe) {

}