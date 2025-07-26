const express = require('express');
const { generateResponse } = require('../controllers/ai.controller');
const router = express.Router();


router.post('/response', generateResponse);

module.exports = router;