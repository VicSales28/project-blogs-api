const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const checkRequiredToken = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json(
        { message: 'Token not found' },
      );
    }
    await jwt.verify(authorization, JWT_SECRET);
    next();
  } catch (error) {
    return res.status(401).json(
      { message: 'Expired or invalid token' },
    );
  }
};

module.exports = {
  checkRequiredToken,
};