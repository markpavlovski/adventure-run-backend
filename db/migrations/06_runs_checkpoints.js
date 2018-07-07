const TABLE_NAME = 'runs_checkpoints'

exports.up = function(knex, Promise) {
  return knex.schema.createTable(TABLE_NAME, function(table){
    table.increments()
    table.integer('run_id').notNullable().references('runs.id')
    table.integer('checkpoint_id').notNullable().references('checkpoints.id')
    table.string('checkpoint_time').notNullable().defaultTo('00:00:00')
    table.timestamps(true,true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists(TABLE_NAME)
};
