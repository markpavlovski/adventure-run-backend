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


module.exports = { getAll, getOne}
