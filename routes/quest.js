const express = require('express');
const router = express.Router();
const { getTodayQuest } = require('../controllers/questController');
const auth = require('../middleware/auth');

router.get('/today', auth, getTodayQuest);

module.exports = router;
