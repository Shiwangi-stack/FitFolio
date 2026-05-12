const mongoose = require("mongoose"); // ✅ ADD THIS
// 
const wishlistSchema = new mongoose.Schema({

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "product", // ✅ MATCHED EXACTLY
    required: true
  }
}, { timestamps: true });