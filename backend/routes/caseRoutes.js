const express = require('express');
const router = express.Router();
const { submitCase } = require('../controllers/caseController');

router.post('/submit', submitCase);

module.exports = router;
