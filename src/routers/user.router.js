const express = require('express');
const userController = require('../controllers/user.controller');
const { checkUserFields } = require('../middlewares/user/checkUserFields');

const router = express.Router();

router.post('/', checkUserFields, userController.insert);

module.exports = router;