const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const logger = require("winston");
const connectDb = require("./config/connectDb");
const categoryRoutes = require("./routes/categoryRoutes");
const subCategoryRoutes = require("./routes/subCategoryRoute");
const brandRoutes = require("./routes/brandRoutes");
const productRoutes = require("./routes/productRoutes");

dotenv.config();
connectDb();

const app = express();

app.use(cors());
app.use(express.json());

// Category
app.use("/categories", categoryRoutes);
//subCategory
app.use("/subcategories", subCategoryRoutes);
//brand
app.use("/brand", brandRoutes);
//
app.use("/products", productRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

const server = app.listen(process.env.PORT, () => {
  logger.info(`Server running on localhost:${process.env.PORT}`);
});

process.on("SIGTERM", () => {
  logger.info("SIGTERM signal received. Shutting down gracefully.");
  server.close(() => {
    logger.info("Server closed.");
    process.exit(0);
  });
});

process.on("SIGINT", () => {
  logger.info("SIGINT signal received. Shutting down gracefully.");
  server.close(() => {
    logger.info("Server closed.");
    process.exit(0);
  });
});
