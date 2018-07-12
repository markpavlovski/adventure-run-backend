const express = require('express')
const router = express.Router()
const dataController = require('../controllers/badges')
const authController = require('../controllers/auth')


router.get('/', authController.isAuthenticated, dataController.getAll)


module.exports = router
