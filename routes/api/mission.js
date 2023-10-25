const express = require('express')
const router = express.Router()
const missionCtrl = require('../../controllers/api/missions')

router.post('/', missionCtrl.createMission)
router.delete('/:id', missionCtrl.deleteMissionById)

module.exports = router
