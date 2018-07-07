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


module.exports = { getAll, getOne }
