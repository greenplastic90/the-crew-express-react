const express = require('express')
const router = express.Router()
const crewCtrl = require('../../controllers/api/crews')

router.post('/', crewCtrl.createCrew)
router.get('/', crewCtrl.getAllCrews)
router.get('/:id', crewCtrl.getCrewById)
router.put('/:id', crewCtrl.updateCrewById)
router.delete('/:id', crewCtrl.deleteCrewById)

module.exports = router
