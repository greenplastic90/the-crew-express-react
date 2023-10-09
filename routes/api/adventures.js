const express = require('express')
const router = express.Router()
const adventureCtrl = require('../../controllers/api/adventures')

router.post('/', adventureCtrl.createAdventure)
router.get('/', adventureCtrl.getAllAdventures)
router.get('/user', adventureCtrl.getAllAdventuresForAUser)
router.get('/:id', adventureCtrl.getAdventureById)
router.put('/:id', adventureCtrl.updateAdventureById)
router.delete('/:id', adventureCtrl.deleteAdventureById)

module.exports = router
