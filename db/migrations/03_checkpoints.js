const TABLE_NAME = 'checkpoints'

exports.up = function(knex, Promise) {
  return knex.schema.createTable(TABLE_NAME, function(table){
    table.increments()
    table.integer('track_id').notNullable().references('tracks.id')
    table.integer('order').notNullable().defaultTo(0)
    table.string('title').notNullable().defaultTo('')
    table.string('description').notNullable().defaultTo('')
    table.string('latlang').notNullable().defaultTo('')
    table.timestamps(true,true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists(TABLE_NAME)
};
