const db = require('../../db/knex')
const shortid = require('shortid')


const getAll = (user_id) => {
  return (
    db('runs')
    .where({ user_id })
    .returning('*')
  ).then(runs => {
    const checkpoints = runs.map(run => (
      db('runs_checkpoints')
      .where({ run_id: run.id })
      .returning('*')
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

const create = (user_id, track_id, path, distance, time, times) => {
  const run_shortid = shortid.generate()
  return (
    db('runs')
    .insert({ run_shortid, user_id, track_id, path, distance, time})
    .returning('*')
  ).then(result => {
    const run_id = result[0].id
    console.log(times)
    const checkpointRecords = times.map(record => {
      console.log(record);
      const {checkpoint_id, checkpoint_time} = record
      return db('runs_checkpoints')
      .insert({ run_id, checkpoint_id, checkpoint_time})
    })
    return Promise.all(checkpointRecords)
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
