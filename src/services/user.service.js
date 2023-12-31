const { User } = require('../models');

const insert = async (displayName, email, password, image) => {
  const userExists = await User.findOne({ where: { email } });
  if (userExists) {
    return { message: 'User already registered' };
  }

  const newUser = { displayName, email, password };
  if (image) { // Preenchimento do campo caso image seja fornecido
    newUser.image = image;
  }

  await User.create(newUser);
  return { message: null };
};

const getAll = async () => {
  const users = await User.findAll({ attributes: { exclude: 'password' } });
  return users;
};

const getById = async (id) => {
  const user = await User.findOne({ where: { id }, attributes: { exclude: 'password' } });
  return user;
};

module.exports = {
  insert,
  getAll,
  getById,
};
