const dataModel = require('../models/tracks')

const getAll = (req, res, next) => {
  dataModel.getAll()
  .then((data) => res.status(200).json({ data }))
  .catch(next)
}

const getOne = (req, res, next) => {
  const id = req.params.track_id
  dataModel.getOne(id)
  .then((data) => res.status(200).json({ data }))
  .catch(next)
}

const getCheckpoints = (req, res, next) => {
  const id = req.params.track_id
  dataModel.getCheckpoints(id)
  .then((data) => res.status(200).json({ data }))
  .catch(next)
}

const getBadges = (req, res, next) => {
  const id = req.params.track_id
  dataModel.getBadges(id)
  .then((data) => res.status(200).json({ data }))
  .catch(next)
}

module.exports = { getAll, getOne, getCheckpoints, getBadges }
