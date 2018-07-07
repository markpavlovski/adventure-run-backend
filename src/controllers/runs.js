const dataModel = require('../models/runs')

const getAll = (req, res, next) => {
  const user_id = req.claim.id
  dataModel.getAll(user_id)
  .then((data) => res.status(200).json({ data }))
  .catch(next)
}

const getOne = (req, res, next) => {
  const run_shortid = req.params.run_shortid
  const user_id = req.claim.id
  dataModel.getOne(user_id, run_shortid)
  .then((data) => res.status(200).json({ data }))
  .catch(next)
}

const create = (req, res, next) => {
  const {track_id, path, distance, time} = req.body
  const user_id = req.claim.id

  if (!(track_id && path && distance && time)) return next({ status: 400, message: 'Bad request'})

  dataModel.create(user_id, track_id, path, distance, time)
  .then((data) => res.status(200).json({ data }))
  .catch(next)
}

const remove = (req, res, next) => {
  const run_shortid = req.params.run_shortid
  const user_id = req.claim.id
  dataModel.remove(user_id, run_shortid)
    .then((data) => res.status(200).json({ data }))
    .catch(next)
}

module.exports = { getOne, getAll, create, remove }
