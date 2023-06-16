const express = require('express');
const categoryController = require('../controllers/category.controller');
const { checkRequiredField } = require('../middlewares/category/checkRequiredField');
const { checkRequiredToken } = require('../middlewares/token-auth/checkRequiredToken');

const router = express.Router();

router.post('/', checkRequiredToken, checkRequiredField, categoryController.insert);

module.exports = router;