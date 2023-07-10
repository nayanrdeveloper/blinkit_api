const bestSellerModel = require("../models/bestSellerModel");

const createBestSeller = async (req, res) => {
  try {
    const { title, products } = req.body;

    const bestSeller = new bestSellerModel({
      title,
      products,
    });

    const newBestSeller = await bestSeller.save();
    res.status(201).json(newBestSeller);
  } catch (error) {
    res.status(500).json({ error: "Failed to create new Best Seller" });
  }
};

const fetchAllBestSeller = async (req, res) => {
  try {
    const bestSeller = await bestSellerModel.find().populate("products");
    res.json(bestSeller);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch best seller" });
  }
};

module.exports = {
  createBestSeller,
  fetchAllBestSeller,
};
