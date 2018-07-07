const TABLE_NAME = 'runs'

exports.seed = function(knex, Promise) {
  return knex(TABLE_NAME).del()
    .then(() => {
      return knex(TABLE_NAME).insert([
        {id: 1, run_shortid: 'A', user_id: 1, track_id: 1, path: '{"key":"value"}', distance: 5.23, time: '00:32:25'},
        {id: 2, run_shortid: 'B', user_id: 1, track_id: 1, path: '{"key":"value"}', distance: 4.95, time: '00:30:00'},
        {id: 3, run_shortid: 'C', user_id: 2, track_id: 3, path: '{"key":"value"}', distance: 11.39, time: '01:12:03'},
      ])
    })
    .then(() => {
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
    })
}
