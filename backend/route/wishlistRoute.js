const express = require("express");
const router = express.Router();

const {
  toggleWishlist,
  getWishlist
} = require("../controller/wishlistController");

router.get("/test", (req, res) => {
  res.json({ message: "wishlist route working ✅" });
});

router.post("/toggle", toggleWishlist);
router.get("/:userId", getWishlist);

module.exports = router;