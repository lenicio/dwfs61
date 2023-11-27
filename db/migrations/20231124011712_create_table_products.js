exports.up = function(knex) {
    return knex.schema.createTable('products', table => {
        table.increments('id').primary();
        table.string('description').notNullable();
        table.string('brand').notNullable();
        table.decimal('price').notNullable();
    });
  
};


exports.down = function(knex) {
    return knex.schema.dropTableIfExists('products');
};
