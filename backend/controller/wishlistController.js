const Wishlist = require("../model/wishlistModel");
require("../model/productModel");

// ADD or REMOVE (TOGGLE)
exports.toggleWishlist = async (req, res) => {
  console.log("BODY:", req.body); // 👈 ADD

  const { userId, productId } = req.body;

  try {
    const existing = await Wishlist.findOne({ userId, productId });

    if (existing) {
      await Wishlist.deleteOne({ userId, productId });
      return res.json({ status: "removed" });
    }

    const item = new Wishlist({ userId, productId });
    await item.save();

    res.json({ status: "added" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET USER WISHLIST
exports.getWishlist = async (req, res) => {
  try {
    const items = await Wishlist.find({
      userId: req.params.userId
    }).populate("productId");

    res.json(items); // ✅ MUST return array

  } catch (err) {
    console.log(err); // 👈 see error in terminal
    res.status(500).json({ error: err.message });
  }
};

