const blogPostService = require('../services/blogPost.service');

const getAll = async (req, res) => {
  try {
    const allBlogsPost = await blogPostService.getAll();
    return res.status(200).json(allBlogsPost);
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno', error: error.message });
  }
};

module.exports = {
  getAll,
};