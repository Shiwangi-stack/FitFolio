import { useEffect, useState } from "react";

export default function WishlistPage() {
  const [items, setItems] = useState([]);
  const user = JSON.parse(localStorage.getItem("userInfo"));

  useEffect(() => {
  if (!user) return;

  fetch(`http://localhost:5000/api/wishlist/${user._id}`)
    .then(res => res.json())
    .then(data => {
      const exists = data.find(
        item => String(item.productId?._id) === String(productId)
      );

      setLiked(!!exists);
    })
    .catch(err => console.log(err));
}, [productId, user]);

  return (
    <div className="container">
      <h2>My Wishlist</h2>

      {items.map(item => (
  <div className="col-md-3" key={item._id}>
    
    <img 
      src={item.productId?.photo1}   // ✅ FIX
      width="100%" 
      alt=""
    />

    <h5>{item.productId?.title}</h5>  {/* ✅ FIX */}

    <p>₹{item.productId?.sellingprice}</p> {/* ✅ FIX */}

  </div>
))}
    </div>
  );
}