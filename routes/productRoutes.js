const express = require("express");
const router = express.Router();
const productController = require("../controller/productController");

// Create a new product
router.post("/", productController.createProduct);

// Fetch all products
router.get("/", productController.fetchAllProducts);

// Get products by category
router.get("/category/:categoryId", productController.getProductsByCategory);

// Get products by subcategory
router.get(
  "/subcategory/:subCategoryId",
  productController.getProductsBySubCategory
);

// Get products by brand
router.get("/brand/:brandId", productController.getProductsByBrand);

module.exports = router;
