const express = require('express')
const router = express.Router()
const dataController = require('../controllers/runs')
const authController = require('../controllers/auth')


router.get('/', authController.isAuthenticated, dataController.getAll)
router.get('/:run_shortid', authController.isAuthenticated, dataController.getOne)
router.post('/', authController.isAuthenticated, dataController.create)
router.delete('/:run_shortid', authController.isAuthenticated, dataController.remove)


module.exports = router
