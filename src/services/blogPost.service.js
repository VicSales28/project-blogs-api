const { User, Category, BlogPost } = require('../models');

const getAll = async () => {
  const allBlogsPost = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories' },
    ],
  });
  return allBlogsPost;
};

module.exports = {
  getAll,
};