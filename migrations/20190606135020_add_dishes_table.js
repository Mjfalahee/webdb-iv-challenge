
exports.up = function(knex, Promise) {
    //Make the tables in the correct order: dishes => recipes => ingredients => recipe ingredients
    //Tables with foreign keys are created after the referenced table is created
  return knex.schema
    .createTable('dishes', tbl => {
        tbl.increments();

        tbl
            .string('name', 128)
            .notNullable()
            .unique();
    })
    .createTable('recipes', tbl => {
        tbl.increments();

        tbl
            .string('name', 128)
            .notNullable()
            .unique();

        tbl
            .integer('dish_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('dishes')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
        tbl
            .string('instructions', 3000)
            .notNullable();
    })
    .createTable('ingredients', tbl => {
        tbl.increments();

        tbl
            .string('name', 128)
            .notNullable();
    })
    .createTable('recipe_ingredients', tbl => {
        tbl.increments();

        tbl
            .integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
        
        tbl
            .integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('ingredients')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');

        tbl
            .integer('amount')
            .notNullable();
    })
};

exports.down = function(knex, Promise) {
    //Tables with a Foreign Key must be removed before the referenced table is removed.
    return knex.schema 
        .dropTableIfExists('recipe_ingredients')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes')
        .dropTableIfExists('dishes');
};
