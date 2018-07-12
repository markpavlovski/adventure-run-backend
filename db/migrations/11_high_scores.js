const TABLE_NAME = 'high_scores'

exports.up = function(knex, Promise) {
  return knex.schema.createTable(TABLE_NAME, function(table){
    table.increments()
    table.integer('track_id').notNullable().references('tracks.id')
    table.integer('first_place').notNullable().references('runs.id')
    table.integer('second_place').notNullable().references('runs.id')
    table.integer('third_place').notNullable().references('runs.id')
    table.integer('guild_id').notNullable().references('guilds.id')
    table.integer('week_id').notNullable().defaultTo(0)
    table.timestamps(true,true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists(TABLE_NAME)
};
