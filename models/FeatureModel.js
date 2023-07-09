const mongoose = require("mongoose");

const featureSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  sponsored: {
    type: Boolean,
    required: true,
    default: false,
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
  ],
});

const Feature = mongoose.model("Feature", featureSchema);

module.exports = Feature;
