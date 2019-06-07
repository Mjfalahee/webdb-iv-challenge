const express = require('express');
const router = express.Router();

const db = require('../models/recipeModel');

// getDishes,
// addDish,
// getDish,
// getRecipes,
// addRecipe

//get dishes == works

function sendError(status, message) {
    res.status(status).json({errorMessage: message});
}

router.get('/dishes', async (req, res) => {
    try {
        const dishes = await db.getDishes();
        res.status(200).json(dishes);
    }
    catch (error) {
       sendError(500, 'Error grabbing dishes');
    }
})

//add dish == works

router.post('/dishes', async (req, res) => {
    try {
        const dish = await db.addDish(req.body);
        res.status(200).json(dish);
    }
    catch (error) {
        sendError(500, 'Error creating dish.');
    }
})

//get dish by id

router.get('/dishes/:id', async (req, res) => {
    try {
        const dish = await db.getDish(req.params.id);
        //const recipe = await db.getRecipesByDishId(req.params.id);
        //console.log(dish);
        //console.log(recipe);
        // obj = {
        //     name: dish,
        //     recipes: recipe
        // }
        res.status(200).json(dish);
    }
    catch (error) {
        sendError(500, 'Error getting the Dish.')
    }
})

//get recipes

//add recipes

//get shopping list


module.exports = router;