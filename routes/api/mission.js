const express = require('express')
const router = express.Router()
const missionCtrl = require('../../controllers/api/missions')

router.post('/', missionCtrl.createMission)

module.exports = router
