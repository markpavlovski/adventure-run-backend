const db = require('../../db/knex')
const shortid = require('shortid')


const getAll = () => {
  return (
    db('tracks')
    .returning('*')
  )
}

const getOne = (id) => {
  return (
    db('tracks')
    .where({ id })
    .returning('*')
  )
}

const getCheckpoints = (track_id) => {
  return (
    db('checkpoints')
    .where({ track_id })
    .returning('*')
  )
}


module.exports = { getAll, getOne, getCheckpoints }
