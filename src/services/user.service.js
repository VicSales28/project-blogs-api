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

module.exports = {
  insert,
};
