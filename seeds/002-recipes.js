
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {dish_id: 1, name: 'Pineapple', instructions: 'Add Pineapple'},
        {dish_id: 2, name: 'Grannys', instructions: 'Put Pineapple in the Taco'},
        {dish_id: 3, name: 'Papas', instructions: 'Add Pineapple to the Meatloaf'},
        {dish_id: 1, name: 'Pepperoni', instructions: 'Add Pepperonis'},
        {dish_id: 2, name: 'Veggie', instructions: 'Dont add meat'},
        {dish_id: 3, name: 'Spicy', instructions: 'Add jalapenos'},
      ]);
    });
};
