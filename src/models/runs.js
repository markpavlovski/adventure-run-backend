const db = require('../../db/knex')
const shortid = require('shortid')


const getAll = (user_id) => {
  return (
    db('runs')
    .where({ user_id })
    .returning('*')
  )
}

const getOne = (user_id, run_shortid) => {
  return (
    db('runs')
    .where({ user_id, run_shortid })
    .returning('*')
  )
}

const create = (user_id, track_id, path, distance, time) => {
  const run_shortid = shortid.generate()
  return (
    db('runs')
    .insert({ run_shortid, user_id, track_id, path, distance, time})
    .returning('*')
  )
}

const remove = (user_id, run_shortid) => {
  return (
    db('runs')
    .where({ user_id, run_shortid })
    .del()
    .returning('*')
  )
}

module.exports = { getAll, getOne, create, remove }
