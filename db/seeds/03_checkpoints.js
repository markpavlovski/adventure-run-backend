const TABLE_NAME = 'checkpoints'

exports.seed = function(knex, Promise) {
  return knex(TABLE_NAME).del()
    .then(() => {
      return knex(TABLE_NAME).insert(INITIAL_CHECKPOINT_DATA)
    })
    .then(() => {
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
    })
}

const INITIAL_CHECKPOINT_DATA = [
  { id: 1,
    latlong: '47.68149, -122.32894',
    track_id: 1,
    order: 0,
    title: '',
    description: '' },
  { id: 2,
    latlong: '47.68215, -122.33998',
    track_id: 1,
    order: 1,
    title: '',
    description: '' },
  { id: 3,
    latlong: '47.67553, -122.34627',
    track_id: 1,
    order: 2,
    title: '',
    description: '' },
  { id: 4,
    latlong: '47.67163, -122.34238',
    track_id: 1,
    order: 3,
    title: '',
    description: '' },
  { id: 5,
    latlong: '47.67574, -122.33385',
    track_id: 1,
    order: 4,
    title: '',
    description: '' },
  { id: 6,
    latlong: '47.68003, -122.32940',
    track_id: 1,
    order: 5,
    title: '',
    description: '' }
  ]
