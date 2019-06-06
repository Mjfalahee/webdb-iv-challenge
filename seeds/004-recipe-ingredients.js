
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {amount: 1, recipe_id: 1, ingredient_id: 1},
        {amount: 2, recipe_id: 1, ingredient_id: 2},
        {amount: 3, recipe_id: 2, ingredient_id: 3},
        {amount: 4, recipe_id: 2, ingredient_id: 4},
        {amount: 5, recipe_id: 3, ingredient_id: 5},
        {amount: 6, recipe_id: 3, ingredient_id: 1},
        {amount: 1, recipe_id: 4, ingredient_id: 2},
        {amount: 2, recipe_id: 4, ingredient_id: 3},
        {amount: 3, recipe_id: 5, ingredient_id: 4},
        {amount: 4, recipe_id: 5, ingredient_id: 5},
        {amount: 5, recipe_id: 6, ingredient_id: 1},
        {amount: 6, recipe_id: 6, ingredient_id: 2}
      ]);
    });
};
