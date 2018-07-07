const TABLE_NAME = 'runs'

exports.up = function(knex, Promise) {
  return knex.schema.createTable(TABLE_NAME, function(table){
    table.increments()
    table.integer('user_id').notNullable().references('users.id')
    table.integer('track_id').notNullable().references('tracks.id')
    table.json('path').notNullable()
    table.decimal('distance').notNullable().defaultTo(0)
    table.string('time').notNullable().defaultTo('00:00:00')
    table.timestamps(true,true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists(TABLE_NAME)
};
