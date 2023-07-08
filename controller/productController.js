const productModel = require("../models/productModel");

const createProduct = async (req, res) => {
  try {
    const {
      name,
      category,
      subCategory,
      brand,
      images,
      description,
      expiryDate,
      seller,
      countryOfOrigin,
      manufactureDetails,
      weight,
    } = req.body;

    const product = new productModel({
      name,
      category,
      subCategory,
      brand,
      images,
      description,
      expiryDate,
      seller,
      countryOfOrigin,
      manufactureDetails,
      weight,
    });

    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: "Failed to create product" });
  }
};

const fetchAllProducts = async (req, res) => {
  try {
    const products = await productModel.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

const getProductsByCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const products = await productModel.find({ category: categoryId });
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products by category" });
  }
};

const getProductsBySubCategory = async (req, res) => {
  try {
    const { subCategoryId } = req.params;
    const products = await productModel.find({ subCategory: subCategoryId });
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products by subcategory" });
  }
};

const getProductsByBrand = async (req, res) => {
  try {
    const { brandId } = req.params;
    const products = await productModel.find({ brand: brandId });
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products by brand" });
  }
};

module.exports = {
  createProduct,
  fetchAllProducts,
  getProductsByCategory,
  getProductsBySubCategory,
  getProductsByBrand,
};
