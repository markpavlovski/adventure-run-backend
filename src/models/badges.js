const db = require('../../db/knex')
const shortid = require('shortid')


const getAll = (user_id) => {
  return db('users_badges_runs')
  .where({ user_id })
  .join('badges', 'badges.id', 'users_badges_runs.badge_id')
  .select(db.raw('badges.*'))
}

const create = (user_id, run_id, badge_ids) => {
  if (!badge_ids.length) Promise.resolve()
  const badgeInserts = badge_ids.map(badge_id => {
    return db('users_badges_runs')
    .insert({ user_id, run_id, badge_id})
    .returning('*')
  })
  return Promise.all(badgeInserts)
}



module.exports = { create, getAll }
