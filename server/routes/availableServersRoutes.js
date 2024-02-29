const router = require("express").Router()

const availableServersController = require("../controllers/availableServersController")
router.post("/", availableServersController.printAvailableServers)

module.exports = router