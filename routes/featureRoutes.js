const express = require("express");
const router = express.Router();
const featureController = require("../controller/featureController");

// Create a new feature
router.post("/", featureController.createFeature);

// Fetch all features
router.get("/", featureController.fetchAllFeatures);

// Fetch Feature by Id
router.get("/:featureId", featureController.fetchFeatureById);

module.exports = router;
