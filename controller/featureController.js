const featureModel = require("../models/FeatureModel");

const createFeature = async (req, res) => {
  try {
    const { title, products, sponsored } = req.body;

    const feature = new featureModel({
      title,
      products,
      sponsored,
    });

    const newFeature = await feature.save();
    res.status(201).json(newFeature);
  } catch (error) {
    res.status(500).json({ error: "Failed to create feature" });
  }
};

const fetchAllFeatures = async (req, res) => {
  try {
    const features = await featureModel.find().populate("products");
    res.json(features);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch features" });
  }
};

const fetchFeatureById = async (req, res) => {
  try {
    const { featureId } = req.params;
    const feature = await featureModel.findById(featureId).populate("products");
    if (!feature) {
      return res.status(404).json({ error: "Feature not found" });
    }
    res.json(feature);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch features" });
  }
};

module.exports = {
  createFeature,
  fetchAllFeatures,
  fetchFeatureById,
};
