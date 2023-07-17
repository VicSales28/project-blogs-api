const blogPostService = require('../services/blogPost.service');

const getAll = async (req, res) => {
  try {
    const allBlogsPost = await blogPostService.getAll();
    return res.status(200).json(allBlogsPost);
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno', error: error.message });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await blogPostService.getById(id);

    if (!result) {
      return res.status(404).json({ message: 'Post does not exist' });
    }

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno', error: error.message });
  }
};

module.exports = {
  getAll,
  getById,
};