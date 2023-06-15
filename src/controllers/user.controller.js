const jwt = require('jsonwebtoken');

const userService = require('../services/user.service');

const { JWT_SECRET } = process.env;

const insert = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const { message } = await userService.insert(displayName, email, password, image);

    if (message) { // Indicando um error na inserção
      return res.status(409).json({ message });
    }

    const payload = { displayName, email, image };
    const token = jwt.sign(payload, JWT_SECRET);

    return res.status(201).json({ token });
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno', error: error.message });
  }
};

module.exports = {
  insert,
};