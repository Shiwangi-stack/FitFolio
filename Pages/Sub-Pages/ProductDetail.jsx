// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { useContext } from "react";
// import { CartContext } from "../CartContext";

// export default function ProductDetail() {
//   const { id } = useParams();

//   const [item, setItem] = useState(null);
//   const [mainImage, setMainImage] = useState("");
//   const [qty, setQty] = useState(1);
//    const { addToCart }= useContext(CartContext);

//   useEffect(() => {
//     fetch("http://localhost:5000/api/getproductbyid/" + id)
//       .then(res => res.json())
//       .then(data => {
//         setItem(data);
//         setMainImage(data.photo1); // default image
//       })
//       .catch(err => console.log(err));
//   }, [id]);

//   if (!item) return <h2 className="text-center mt-5">Loading...</h2>;

//   return (
//     <div className="container mt-5">
//       <div className="row">

//         {[item.photo1, item.photo2, item.photo3].map((img, i) => (
//   img && (
//     <img
//       key={i}
//       src={img}
//       style={{ width: "80px", height: "80px", objectFit: "cover" }}
//       // className="thumb-img" height={100} width={100}
//       onClick={() => setMainImage(img)}
//     />
//   )
// ))}

// <img src={mainImage}
//  style={{ width: "400px", height: "400px", objectFit: "contain" }}
//   className="main-img" />

//         {/* RIGHT SIDE DETAILS */}
//         <div className="col-lg-6">
//           <h2>{item.title}</h2>

//           <p className="text-muted">{item.category}</p>

//           <h3 className="text-danger">
//             ₹{item.sellingprice}{" "}
//             <span className="text-muted text-decoration-line-through fs-5">
//               ₹{item.mrp}
//             </span>
//           </h3>

//           <p dangerouslySetInnerHTML={{ __html: item.description }}></p>

//           <p><strong>Available Size:</strong> {item.availablesize}</p>

//           {/* Quantity */}
//           <div className="d-flex align-items-center mb-3">
//             <button className="btn btn-outline-dark" onClick={() => setQty(qty > 1 ? qty - 1 : 1)}>-</button>
//             <span className="mx-3">{qty}</span>
//             <button className="btn btn-outline-dark" onClick={() => setQty(qty + 1)}>+</button>
//           </div>

//           {/* Button */}
//           <button className="btn btn-danger px-4 py-2"   onClick={()=>addToCart(item)}>
//             Add to Cart
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// }

import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../CartContext";

export default function ProductDetail() {
  const { id } = useParams();

  const [item, setItem] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [qty, setQty] = useState(1);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch("http://localhost:5000/api/getproductbyid/" + id)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
        setMainImage(data.photo1);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (!item)
    return (
      <h2 className="text-center mt-5 fw-bold">
        Loading...
      </h2>
    );

  return (
    <>
      <div className="container-fluid p-0">

        {/* HERO */}
        <div
          className="text-center bg-secondary text-light py-5"
        >
          <h1 className="display-5 fw-bold">
            Product Details
          </h1>

          <p className="text-black opacity-75 fs-5">
            Premium style crafted for you
          </p>
        </div>

        {/* MAIN SECTION */}
        <div className="container py-5">

          <div className="row g-5 align-items-start">

            {/* LEFT SIDE IMAGE */}
            <div className="col-lg-6">

              <div className="bg-white shadow rounded-4 p-4">

                {/* Main Image */}
                <div className="text-center mb-4">
                  <img
                    src={mainImage}
                    className="img-fluid rounded-4"
                    style={{
                      height: "450px",
                      objectFit: "contain",
                    }}
                    alt=""
                  />
                </div>

                {/* Thumbnails */}
                <div className="d-flex justify-content-center gap-3">

                  {[item.photo1, item.photo2, item.photo3].map(
                    (img, i) =>
                      img && (
                        <img
                          key={i}
                          src={img}
                          onClick={() =>
                            setMainImage(img)
                          }
                          style={{
                            width: "90px",
                            height: "90px",
                            objectFit: "cover",
                            cursor: "pointer",
                            border:
                              mainImage === img
                                ? "2px solid black"
                                : "1px solid #ddd",
                            borderRadius: "12px",
                          }}
                          alt=""
                        />
                      )
                  )}

                </div>

              </div>
            </div>

            {/* RIGHT SIDE DETAILS */}
            <div className="col-lg-6">

              <span className="badge bg-dark px-3 py-2 mb-3">
                {item.category}
              </span>

              <h2 className="fw-bold mb-3">
                {item.title}
              </h2>

              {/* Rating */}
              <p className="text-warning fs-5 mb-3">
                ★★★★★
              </p>

              {/* Price */}
              <h3 className="fw-bold text-danger mb-4">
                ₹{item.sellingprice}

                <span className="text-muted text-decoration-line-through fs-5 ms-3">
                  ₹{item.mrp}
                </span>
              </h3>

              {/* Description */}
              <div
                className="text-muted lh-lg mb-4"
                dangerouslySetInnerHTML={{
                  __html: item.description,
                }}
              ></div>

              {/* Size */}
              <p className="mb-4">
                <strong>Available Size:</strong>{" "}
                {item.availablesize}
              </p>

              {/* Quantity */}
              <div className="d-flex align-items-center mb-4">

                <button
                  className="btn btn-outline-dark px-3"
                  onClick={() =>
                    setQty(qty > 1 ? qty - 1 : 1)
                  }
                >
                  -
                </button>

                <span className="mx-4 fw-bold fs-5">
                  {qty}
                </span>

                <button
                  className="btn btn-outline-dark px-3"
                  onClick={() =>
                    setQty(qty + 1)
                  }
                >
                  +
                </button>

              </div>

              {/* Buttons */}
              <div className="d-flex gap-3">

                <button
                  className="btn btn-dark px-5 py-3 rounded-pill"
                  onClick={() => addToCart(item)}
                >
                  Add To Cart
                </button>

                <button className="btn btn-outline-dark px-4 py-3 rounded-pill">
                  ❤ Wishlist
                </button>

              </div>

              {/* Extra */}
              <div className="mt-5 border-top pt-4 text-muted">
                <p>✔ 100% Original Product</p>
                <p>✔ Easy 7 Days Return</p>
                <p>✔ Free Delivery Available</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}