const brandModel = require("../models/brandModel");

const createBrand = async (req, res) => {
  try {
    const { name, image } = req.body;

    const brand = new brandModel({
      name,
      image,
    });

    const newBrand = await brand.save();
    res.status(201).json(newBrand);
  } catch (error) {
    res.status(500).json({ error: "Failed to create brand" });
  }
};

const fetchAllBrands = async (req, res) => {
  try {
    const brands = await brandModel.find();
    res.json(brands);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch brands" });
  }
};

module.exports = { createBrand, fetchAllBrands };

