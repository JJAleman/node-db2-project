
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl =>{
      tbl.increments();
      tbl.text('make', 128).notNullable();
      tbl.text('model', 128).notNullable();
      tbl.decimal('VIN').unique().notNullable();
      tbl.decimal('Mileage').notNullable();;
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
  
};
