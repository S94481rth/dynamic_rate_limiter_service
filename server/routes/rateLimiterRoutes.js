const express = require('express')

const router = express.Router()

const rateLimiterController = require('../controllers/rateLimiterController')

router.get('/', rateLimiterController.welcome)
router.get('/lightEndPoint', rateLimiterController.lightEndPoint)

module.exports = router