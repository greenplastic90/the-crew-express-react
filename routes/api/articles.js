const express = require('express');
const router = express.Router();
const articlesCtrl = require('../../controllers/api/articles');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// GET /api/articles
router.get('/', articlesCtrl.index);

// POST /api/articles
router.post('/', ensureLoggedIn, articlesCtrl.create);

// GET /api/articles/:id
router.get('/:id', articlesCtrl.show);

// PUT /api/articles/:id
router.put('/:id', ensureLoggedIn, articlesCtrl.update);

// DELETE /api/articles/:id
router.delete('/:id', ensureLoggedIn, articlesCtrl.delete);

module.exports = router;
