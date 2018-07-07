const TABLE_NAME = 'tracks'

exports.up = function(knex, Promise) {
  return knex.schema.createTable(TABLE_NAME, function(table){
    table.increments()
    table.string('name').notNullable().defaultTo('')
    table.string('latlong').notNullable().defaultTo('')
    table.string('description').notNullable().defaultTo('')
    table.decimal('distance').notNullable().defaultTo(0)
    table.timestamps(true,true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists(TABLE_NAME)
};
