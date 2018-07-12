const db = require('../../db/knex')
const badges = require('./badges')
const shortid = require('shortid')
const knex = db

const getAll = (user_id) => {
  return (
    db('runs')
    .where({ user_id })
    .join('tracks', 'tracks.id', 'runs.track_id')
    .select(knex.raw('runs.*'), knex.raw('tracks.latlong'), knex.raw('tracks.name'))
  ).then(runs => {
    const checkpoints = runs.map(run => (
      db('runs_checkpoints')
      .where({ run_id: run.id })
      .join('checkpoints', 'checkpoints.id', 'runs_checkpoints.checkpoint_id')
      .select(knex.raw('runs_checkpoints.*'), knex.raw('checkpoints.latlong'))
    ))
    return Promise.all(checkpoints).then(results => {
      const detailedRuns = runs.map((run,idx)=>({...run, checkpoints: results[idx]}))
      return detailedRuns
    })
  })
}

const getOne = (user_id, run_shortid) => {
  return (
    db('runs')
    .where({ user_id, run_shortid })
    .returning('*')
  )
}

const create = (user_id, track_id, path, distance, time, times, badge_ids) => {
  const run_shortid = shortid.generate()
  return (
    db('runs')
    .insert({ run_shortid, user_id, track_id, path, distance, time})
    .returning('*')
  )
  .then(result => {
    const run_id = result[0].id
    const checkpointRecords = times.map(record => {
      const {checkpoint_id, checkpoint_time} = record
      return db('runs_checkpoints')
      .insert({ run_id, checkpoint_id, checkpoint_time})
      .returning('*')
    })
    return Promise.all(checkpointRecords)
    .then(()=>result)
  })
  .then(result => {
    const run_id = result[0].id
    return badges.create(user_id, run_id, badge_ids)
    .then(()=>result)
  })
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
