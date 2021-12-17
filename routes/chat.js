const express = require('express');
const router = express.Router();
const {page} = require('../api/controllers/chat')

router.get('/',page);


module.exports = router;