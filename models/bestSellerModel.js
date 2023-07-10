const mongoose = require("mongoose");

const bestSellerSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
  ],
});

const BestSeller = mongoose.model("BestSeller", bestSellerSchema);

module.exports = BestSeller;
