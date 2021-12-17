const express = require('express');
const router = express.Router();
const {authentication,page} = require('../api/controllers/login')


/* GET login page. */
router.get('/', page) 
 
/* POST login page */
router.post('/',authentication);
 
module.exports = router;