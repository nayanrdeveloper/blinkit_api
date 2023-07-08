const categoryModel = require("../models/categoryModel");

const getAllCategories = async (req, res) => {
  try {
    const categories = await categoryModel.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const createCategory = async (req, res) => {
  try {
    const { name, image } = req.body;
    const category = new Category({ name, image });
    await category.save();
    res.status(201).json(category);
  } catch (error) {
    res.status(400).json({ error: "Bad Request" });
  }
};

module.exports = { getAllCategories, createCategory };
