import { useState, useEffect } from "react";

export default function WishlistButton({ productId }) {
  const [liked, setLiked] = useState(false);
  const user = JSON.parse(localStorage.getItem("userInfo"));

  // Check if already in wishlist
  useEffect(() => {
    if (!user) return;

    fetch(`https://fitfolio-9u7p.onrender.com/api/wishlist/${user._id}`)
      .then(res => res.json())
      .then(data => {
        const exists = data.find(
          item => item.productId?._id === productId
        );
        setLiked(!!exists);
      })
      .catch(err => console.log(err));
  }, [productId]);

  const handleWishlist = async () => {
    if (!user) {
      alert("Login first");
      return;
    }

    try {
      const res = await fetch("https://fitfolio-9u7p.onrender.com/api/wishlist/toggle", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          userId: user._id,
          productId
        })
      });

      const data = await res.json();

      // Toggle UI instantly
      if (data.status === "added") {
        setLiked(true);
      } else {
        setLiked(false);
      }

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <span
      onClick={handleWishlist}
      style={{
        cursor: "pointer",
        fontSize: "22px"
      }}
    >
      {liked ? "❤️" : "🤍"}
    </span>
  );
}