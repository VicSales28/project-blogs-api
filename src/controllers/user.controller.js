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

const getAll = async (req, res) => {
  try {
    const users = await userService.getAll();

    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno', error: error.message });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userService.getById(id);

    if (!user) {
      return res.status(404).json({ message: 'User does not exist' });
    }
    
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno', error: error.message });
  }
};

module.exports = {
  insert,
  getAll,
  getById,
};