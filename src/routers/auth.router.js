const express = require('express');
const authController = require('../controllers/auth.controller');
const { checkRequiredFields } = require('../middlewares/checkRequiredFields');

const router = express.Router();

router.post('/', checkRequiredFields, authController.authUser);

module.exports = router;