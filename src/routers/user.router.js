const express = require('express');
const userController = require('../controllers/user.controller');
const { checkUserFields } = require('../middlewares/user/checkUserFields');
const { checkRequiredToken } = require('../middlewares/token-auth/checkRequiredToken');

const router = express.Router();

router.post('/', checkUserFields, userController.insert);
router.get('/', checkRequiredToken, userController.getAll);
router.get('/:id', checkRequiredToken, userController.getById);

module.exports = router;