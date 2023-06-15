const jwt = require('jsonwebtoken');

const authService = require('../services/auth.service');

const { JWT_SECRET } = process.env;

const authUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { message } = await authService.authUser(email, password);

    if (message) { // Indicando um error na autenticação
      return res.status(400).json({ message });
    }

    const payload = { email };
    const token = jwt.sign(payload, JWT_SECRET);

    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno', error: error.message });
  }
};

module.exports = {
  authUser,
};