const subCategoryModel = require("../models/subCategoryModel");

const createSubCategory = async (req, res) => {
  try {
    const { name, image, category } = req.body;

    const subCategory = new subCategoryModel({
      name,
      image,
      category,
    });

    const newSubCategory = await subCategory.save();
    res.status(201).json(newSubCategory);
  } catch (error) {
    res.status(500).json({ error: "Failed to create subcategory" });
  }
};

const fetchAllSubCategories = async (req, res) => {
  try {
    const subCategories = await subCategoryModel.find();
    res.json(subCategories);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch subcategories" });
  }
};

const getSubCategoriesByCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const subCategories = await subCategoryModel.find({ category: categoryId });
    res.json(subCategories);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to fetch subcategories by category" });
  }
};

module.exports = {
  createSubCategory,
  fetchAllSubCategories,
  getSubCategoriesByCategory,
};
