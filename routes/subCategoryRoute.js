const express = require("express");
const router = express.Router();
const subCategoryController = require("../controller/subCategoryController");

// Create a new subcategory
router.post("/", subCategoryController.createSubCategory);

// Fetch all subcategories
router.get("/", subCategoryController.fetchAllSubCategories);

// Get subcategories by category
router.get("/:categoryId", subCategoryController.getSubCategoriesByCategory);

module.exports = router;
