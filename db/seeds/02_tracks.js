const TABLE_NAME = 'tracks'

exports.seed = function(knex, Promise) {
  return knex(TABLE_NAME).del()
    .then(() => {
      return knex(TABLE_NAME).insert(INITIAL_TRACK_DATA)
    })
    .then(() => {
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
    })
}

const INITIAL_TRACK_DATA = [
  {
    id: 1,
    name: 'Green Lake Loop',
    latlong: '47.681471, -122.328945',
    description: '',
    distance: 5,
  },
  {
    id: 2,
    name: 'Ballard - Downtown',
    latlong: '47.667729, -122.384861',
    description: '',
    distance: 12,
  },
  {
    id: 3,
    name: 'All The Parks',
    latlong: '47.617981, -122.319498',
    description: '',
    distance: 10,
  },
  {
    id: 4,
    name: 'Troll - UW',
    latlong: '47.651410, -122.351054',
    description: '',
    distance: 6,
  },
  {
    id: 5,
    name: 'Montlake Bridge Loop',
    latlong: '47.647282, -122.304621',
    description: '',
    distance: 5,
  },
  {
    id: 6,
    name: 'Eastlake Stairs Loop',
    latlong: '47.634961, -122.322331',
    description: '',
    distance: 5,
  }
]
