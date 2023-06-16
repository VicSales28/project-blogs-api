const express = require('express');
const blogPostController = require('../controllers/blogPost.controller');
const { checkRequiredToken } = require('../middlewares/token-auth/checkRequiredToken');

const router = express.Router();

router.get('/', checkRequiredToken, blogPostController.getAll);

module.exports = router;