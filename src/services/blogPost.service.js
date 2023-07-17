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

const getById = async (id) => {
  const result = await BlogPost.findOne({
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories', through: { attributes: [] } }],
    where: { id },
  });
  return result;
};

module.exports = {
  getAll,
  getById,
};