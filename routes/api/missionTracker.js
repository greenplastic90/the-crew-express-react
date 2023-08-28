const express = require('express')
const router = express.Router()
const missionTrackerCtrl = require('./../../controllers/api/missionTracker')

router.get('/crew/:crewId', missionTrackerCtrl.getAllByCrewId)

router.get('/:id', missionTrackerCtrl.getById)

router.post('/crew/:crewId/mission/:missionId', missionTrackerCtrl.create)

router.put('/:id', missionTrackerCtrl.update)

router.delete('/:id', missionTrackerCtrl.remove)

module.exports = router
