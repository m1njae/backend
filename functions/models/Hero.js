const mongoose = require("mongoose");

const heroSchema = new mongoose.Schema(
  {
    token: { type: String, required: true },
    email: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Hero", heroSchema);
