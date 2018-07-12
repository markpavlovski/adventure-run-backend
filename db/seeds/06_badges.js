const TABLE_NAME = 'badges'

exports.seed = function(knex, Promise) {
  return knex(TABLE_NAME).del()
    .then(() => {
      return knex(TABLE_NAME).insert([
        {id: 1, name: 'Start to Finish', description: 'Get all checkpoints in the right order from start to finish'},
        {id: 2, name: 'Backwards', description: 'Run the track backwards'},
        {id: 3, name: 'Wonderer', description: 'Get all checkpoints not in order'},
        {id: 4, name: 'Stair Climber', description: 'Run a track with a staircase'},
        {id: 5, name: 'Loop', description: 'Run a loop track'},
        {id: 6, name: 'One Way', description: 'Run a oneway track'},
        {id: 7, name: '5K', description: 'Run a 5K track'},
        {id: 8, name: '10K', description: 'Run a 10K track'},
        {id: 9, name: 'Half Marathon', description: 'Run a half marathon track'},
        {id: 10, name: 'Marathon', description: 'Run a marathon track'},
        {id: 11, name: 'Over Achiever', description: 'Keep running for longer than it takes to complete all the checkpoints'},
      ])
    })
    .then(() => {
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
    })
}
