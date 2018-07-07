const TABLE_NAME = 'users_badges_runs'

exports.up = function(knex, Promise) {
  return knex.schema.createTable(TABLE_NAME, function(table){
    table.increments()
    table.integer('user_id').notNullable().references('users.id')
    table.integer('badge_id').notNullable().references('badges.id')
    table.integer('run_id').notNullable().references('runs.id')
    table.timestamps(true,true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists(TABLE_NAME)
};
