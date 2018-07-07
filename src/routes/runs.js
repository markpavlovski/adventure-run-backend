const express = require('express')
const router = express.Router()
const dataController = require('../controllers/runs')
const authController = require('../controllers/auth')


router.get('/:userId', authController.isAuthenticated, dataController.get)
router.post('/:userId', authController.isAuthenticated, dataController.create)
router.delete('/:userId', authController.isAuthenticated, dataController.remove)


module.exports = router
