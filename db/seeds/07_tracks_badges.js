const TABLE_NAME = 'tracks_badges'

exports.seed = function(knex, Promise) {
  return knex(TABLE_NAME).del()
    .then(() => {
      return knex(TABLE_NAME).insert([
        {id: 1, track_id: 1, badge_id: 1},
        {id: 2, track_id: 1, badge_id: 2},
        {id: 3, track_id: 1, badge_id: 3},
        {id: 4, track_id: 1, badge_id: 5},
        {id: 5, track_id: 1, badge_id: 11},
        {id: 6, track_id: 2, badge_id: 1},
        {id: 7, track_id: 2, badge_id: 2},
        {id: 8, track_id: 2, badge_id: 3},
        {id: 9, track_id: 2, badge_id: 4},
        {id: 10, track_id: 2, badge_id: 6},
        {id: 11, track_id: 2, badge_id: 8},
        {id: 12, track_id: 2, badge_id: 11},
        {id: 13, track_id: 3, badge_id: 1},
        {id: 14, track_id: 3, badge_id: 2},
        {id: 15, track_id: 3, badge_id: 3},
        {id: 16, track_id: 3, badge_id: 4},
        {id: 17, track_id: 3, badge_id: 6},
        {id: 18, track_id: 3, badge_id: 11},
        {id: 19, track_id: 4, badge_id: 1},
        {id: 20, track_id: 4, badge_id: 2},
        {id: 21, track_id: 4, badge_id: 3},
        {id: 22, track_id: 4, badge_id: 6},
        {id: 23, track_id: 4, badge_id: 7},
        {id: 24, track_id: 4, badge_id: 11},
        {id: 25, track_id: 5, badge_id: 1},
        {id: 26, track_id: 5, badge_id: 2},
        {id: 27, track_id: 5, badge_id: 3},
        {id: 28, track_id: 5, badge_id: 5},
        {id: 29, track_id: 5, badge_id: 7},
        {id: 30, track_id: 5, badge_id: 11},
        {id: 31, track_id: 6, badge_id: 1},
        {id: 32, track_id: 6, badge_id: 2},
        {id: 33, track_id: 6, badge_id: 3},
        {id: 34, track_id: 6, badge_id: 4},
        {id: 35, track_id: 6, badge_id: 5},
        {id: 36, track_id: 6, badge_id: 7},
        {id: 37, track_id: 6, badge_id: 11}
      ])
    })
    .then(() => {
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
    })
}
