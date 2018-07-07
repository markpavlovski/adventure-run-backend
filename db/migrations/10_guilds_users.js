const TABLE_NAME = 'guilds_users'

exports.up = function(knex, Promise) {
  return knex.schema.createTable(TABLE_NAME, function(table){
    table.increments()
    table.integer('guild_id').notNullable().references('guilds.id')
    table.integer('user_id').notNullable().references('users.id')
    table.timestamps(true,true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists(TABLE_NAME)
};
