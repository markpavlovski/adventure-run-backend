const dataModel = require('../models/badges')

const getAll = (req, res, next) => {
  const user_id = req.claim.id
  dataModel.getAll(user_id)
  .then((data) => res.status(200).json({ data }))
  .catch(next)
}


module.exports = { getAll }
