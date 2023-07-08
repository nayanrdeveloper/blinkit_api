const express = require("express");
const router = express.Router();
const brandController = require("../controller/brandController");

// Create a new brand
router.post("/", brandController.createBrand);

// Fetch all brands
router.get("/", brandController.fetchAllBrands);

module.exports = router;
