const express = require('express')
const router = express.Router()
const dataController = require('../controllers/tracks')
const authController = require('../controllers/auth')


router.get('/', authController.isAuthenticated, dataController.getAll)
router.get('/:track_id', authController.isAuthenticated, dataController.getOne)
router.get('/:track_id/checkpoints', authController.isAuthenticated, dataController.getCheckpoints)
router.get('/:track_id/badges', authController.isAuthenticated, dataController.getBadges)


module.exports = router
