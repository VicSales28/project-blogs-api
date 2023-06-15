const { User } = require('../models');

const authUser = async (email, password) => {
    const user = await User.findOne({ where: { email, password } });
    return user ? { message: null } : { message: 'Invalid fields' };
};

module.exports = { authUser };