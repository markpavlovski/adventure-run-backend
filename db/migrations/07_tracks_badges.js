const TABLE_NAME = 'tracks_badges'

exports.up = function(knex, Promise) {
  return knex.schema.createTable(TABLE_NAME, function(table){
    table.increments()
    table.integer('track_id').notNullable().references('tracks.id')
    table.integer('badge_id').notNullable().references('badges.id')
    table.timestamps(true,true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists(TABLE_NAME)
};
