
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries SWITCH DEL WITH TRUNCATE TO RESET THE IDS
  return knex('dishes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        {name: 'Pizza'},
        {name: 'Tacos'},
        {name: 'Meatloaf'}
      ]);
    });
};
