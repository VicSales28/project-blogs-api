const categoryService = require('../services/category.service');

const insert = async (req, res) => {
  try {
    const { name } = req.body;
    const newCategory = await categoryService.insert(name);

    return res.status(201).json(newCategory);
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno', error: error.message });
  }
};

const getAll = async (req, res) => {
  try {
    const categories = await categoryService.getAll();

    return res.status(200).json(categories);
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno', error: error.message });
  }
};

module.exports = {
  insert,
  getAll,
};