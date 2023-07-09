const express = require("express");
const router = express.Router();
const featureController = require("../controller/featureController");

// Create a new feature
router.post("/", featureController.createFeature);

// Fetch all features
router.get("/", featureController.fetchAllFeatures);

module.exports = router;
