var express = require('express');
var router = express.Router();
const {page,insert} = require('../api/controllers/users')

router.get('/signup', page);
router.post('/signup', insert);
module.exports = router;
