
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'Pineapple', units: 'bits'},
        {name: 'Pepperoni', units: 'pieces'},
        {name: 'Meat', units: 'lbs'},
        {name: 'Cheese', units: 'oz'},
        {name: 'Butter', units: 'sticks'}
      ]);
    });
};