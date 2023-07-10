const express = require("express");
const router = express.Router();
const bestSellerController = require("../controller/bestSellerController");

// Create a new best seller
router.post("/", bestSellerController.createBestSeller);

// Fetch all best seller
router.get("/", bestSellerController.fetchAllBestSeller);

module.exports = router;
