// import { useState, useEffect } from "react"
// import { Link } from "react-router-dom"

// export default function Men() {

//  const [items, setitems] = useState([])
// const [filteredItems, setFilteredItems] = useState([])

// useEffect(() => {
//   fetch("http://localhost:5000/api/getproduct")
//     .then(response => response.json())
//     .then(data => {
//       setitems(data)
//       // filter men products here
//       const menProducts = data.filter(item => item.gender === "Male")
//       setFilteredItems(menProducts)
//     })
//     .catch(err => console.log(err))
// }, [])

// const [sizes, setSizes] = useState([]);
//   const [colors, setColors] = useState([]);

//   const handleSizeChange = (e) => {
//     const value = e.target.value;
//     setSizes((prev) =>
//       prev.includes(value)
//         ? prev.filter((s) => s !== value)
//         : [...prev, value]
//     );
//   };

//   const handleColorChange = (e) => {
//     const value = e.target.value;
//     setColors((prev) =>
//       prev.includes(value)
//         ? prev.filter((c) => c !== value)
//         : [...prev, value]
//     );
//   };

//     const [minPrice, setMinPrice] = useState(0);
//   const [maxPrice, setMaxPrice] = useState(1000);

//   return (
//     <>
//     <div className="container-fluid">
//         <div className="row bg-dark text-white text-center p-5">
//             <h1>Men's Collection</h1>
//             <p>Discover the letest trends in Men's fashion</p>
//         </div>

//         <div className="row p-5">
//           <a className="nav-link fw-bold fs-5" href=""><i class="bi bi-house-door-fill mx-2"></i>Home-</a>
//         </div>

//         <div className="row p-5">
//           <div className="col-lg-3">
//             <h4 class="mb-4"><u>CATEGORIES</u></h4>
//             <div>
//             <details>
//               <summary><strong>Clothing</strong></summary>
//               <ul>
//                 <a href="" className="nav-link"><li>Coats</li></a>
//                 <a href="" className="nav-link"><li>Jackets</li></a>
//                 <a href="" className="nav-link"><li>Dresses</li></a>
//                 <a href="" className="nav-link"><li>Shirts</li></a>
//                 <a href="" className="nav-link"><li>T-shirts</li></a>
//                 <a href="" className="nav-link"><li>Jeans</li></a>
//               </ul>
//               </details>
//               <hr />
//               <details>
//               <summary><strong>Shoes</strong></summary>
//               <ul>
//                 <a href="" className="nav-link"><li>Heals</li></a>
//                 <a href="" className="nav-link"><li>Boots</li></a>
//                 <a href="" className="nav-link"><li>Sneakers</li></a>
//                 <a href="" className="nav-link"><li>Sandals</li></a>
//                 <a href="" className="nav-link"><li>Flats</li></a>
//               </ul>
//               </details>
//               <hr />
//               <details>
//               <summary><strong>Bags</strong></summary>
//               <ul>
//                 <a href="" className="nav-link"><li>Handbags</li></a>
//                 <a href="" className="nav-link"><li>Backpacks</li></a>
//                 <a href="" className="nav-link"><li>Clutches</li></a>
//                 <a href="" className="nav-link"><li>Totes</li></a>
//               </ul>
//               </details>
//               <hr />
//               <details>
//               <summary><strong>Accessories</strong></summary>
//               <ul>
//                 <a href="" className="nav-link"><li>Jewelry</li></a>
//                 <a href="" className="nav-link"><li>Watches</li></a>
//                 <a href="" className="nav-link"><li>Sunglasses</li></a>
//                 <a href="" className="nav-link"><li>Scarves</li></a>
//                 <a href="" className="nav-link"><li>T-shirts</li></a>
//                 <a href="" className="nav-link"><li>Belts</li></a>
//               </ul>
//               </details>
//             </div>
//             <h4 className="mt-4"><u>SHOP BY PRICE</u></h4>
//             <p>
//         Min: ₹{minPrice} | Max: ₹{maxPrice}
//       </p>

//       {/* Min slider */}
//       <input
//         type="range"
//         min="0"
//         max="1000"
//         value={minPrice}
//         onChange={(e) => setMinPrice(Number(e.target.value))}
//       />

//       <br />

//       {/* Max slider */}
//       <input
//         type="range"
//         min="0"
//         max="1000"
//         value={maxPrice}
//         onChange={(e) => setMaxPrice(Number(e.target.value))}
//       />

//             <h3 className="mt-5"><u>Shop by Size</u></h3>
//       <label className="fs-5">
//         <input type="checkbox" value="S" onChange={handleSizeChange} />
//         Small
//       </label><br />
//       <label className="fs-5">
//         <input type="checkbox" value="M" onChange={handleSizeChange} />
//         Medium
//       </label><br />
//       <label className="fs-5">
//         <input type="checkbox" value="L" onChange={handleSizeChange} />
//         Large
//       </label><br />

//       <h3 className="mt-5"><u>Shop by Color</u></h3>
//       <label className="fs-5">
//         <input type="checkbox" value="red" onChange={handleColorChange} />
//         Red
//       </label><br />
//       <label className="fs-5">
//         <input type="checkbox" value="blue" onChange={handleColorChange} />
//         Blue
//       </label><br />
//       <label className="fs-5">
//         <input type="checkbox" value="black" onChange={handleColorChange} />
//         Black
//       </label><br />

//       <h3 className="mt-5">Selected Filters:</h3>
//       <p className="fs-5">Sizes: {sizes.join(", ") || "None"}</p>
//       <p className="fs-5">Colors: {colors.join(", ") || "None"}</p>
//           </div>

//          <div className="col-lg-9">
//   <div className="row">
//     {filteredItems.map((item, index) => (
//       <div className="col-lg-4 mb-4" key={index}>
//         <img
//           src={item.photo1}
//           height={250}
//           width={270}
//           alt={item.title}
//         />
//         <h4 className="text-center">{item.title}
//           <Link 
//     to={`/productdetail/${item._id}`} 
//     className="text-decoration-none text-dark"
//   >
//     {item.title}
//   </Link>
//         </h4>
//         <p className="text-center">
//           <i className="bi bi-star-fill text-warning"></i>
//           <i className="bi bi-star-fill text-warning"></i>
//           <i className="bi bi-star-fill text-warning"></i>
//           <i className="bi bi-star-fill text-warning"></i>
//           <i className="bi bi-star-fill text-warning"></i>
//         </p>

//         <p className="text-center">₹{item.sellingprice}</p>
//       </div>
//     ))}
//   </div>
// </div>
//         </div>


//     </div>

    
    
//     </>
//   )
// }


import { useState, useEffect, useContext } from "react";
import { CartContext } from "../CartContext";
import { Link } from "react-router-dom";
import WishlistButton from "../wishlistButton";

export default function Men() {
  const { addToCart } = useContext(CartContext);

  const [items, setitems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(5000);
  const [currentPage, setCurrentPage] = useState(1);

  const perPage = 6;

  useEffect(() => {
    fetch("http://localhost:5000/api/getproduct")
      .then((res) => res.json())
      .then((data) => {
        setitems(data);

        // 🔥 CHANGE ONLY THIS LINE
        const menProducts = data.filter(
          (item) => item.gender === "Male"
        );

        setFilteredItems(menProducts);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [sizes, minPrice, maxPrice]);

  const handleSizeChange = (e) => {
    const value = e.target.value;

    setSizes((prev) =>
      prev.includes(value)
        ? prev.filter((s) => s !== value)
        : [...prev, value]
    );
  };

  /* FILTER */
  const filteredProducts = filteredItems.filter((item) => {
    const sizeMatch =
      sizes.length === 0 ||
      sizes.includes(item.availablesize);

    const priceMatch =
      item.sellingprice >= minPrice &&
      item.sellingprice <= maxPrice;

    return sizeMatch && priceMatch;
  });

  /* PAGINATION */
  const total = filteredProducts.length;

  const start = (currentPage - 1) * perPage + 1;
  const end = Math.min(currentPage * perPage, total);

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  const totalPages = Math.ceil(total / perPage);

  return (
    <div className="container-fluid p-0">

      {/* HERO */}
      <div className="row bg-dark text-center text-light py-5 m-0">
        <h1 className="display-5 fw-bold">
          Men's Collection
        </h1>
        <p className="fs-5 opacity-75">
          Discover premium fashion for men
        </p>
      </div>

      {/* BREADCRUMB */}
      <div className="row m-0 px-5 py-4 bg-light">
        <p className="fw-semibold mb-0">
          <i className="bi bi-house-door-fill text-danger me-2"></i>
          Home / Men
        </p>
      </div>

      <div className="row px-5 py-5 m-0">

        {/* SIDEBAR */}
        <div className="col-lg-3">

          <div className="shadow rounded-4 p-4 bg-white mb-4">
            <h4 className="fw-bold border-bottom pb-2 mb-4">
              Categories
            </h4>

            <details className="mb-3">
              <summary className="fw-semibold">Clothing</summary>
              <ul className="mt-2">
                <li>Shirts</li>
                <li>T-Shirts</li>
                <li>Jeans</li>
                <li>Jackets</li>
              </ul>
            </details>

            <details className="mb-3">
              <summary className="fw-semibold">Shoes</summary>
              <ul className="mt-2">
                <li>Sneakers</li>
                <li>Boots</li>
                <li>Sandals</li>
              </ul>
            </details>
          </div>

          {/* PRICE */}
          <div className="shadow rounded-4 p-4 bg-white mb-4">
            <h5 className="fw-bold mb-3">Price</h5>

            <p>₹{minPrice} - ₹{maxPrice}</p>

            <input
              type="range"
              min="0"
              max="5000"
              value={minPrice}
              onChange={(e) => setMinPrice(Number(e.target.value))}
              className="form-range"
            />

            <input
              type="range"
              min="0"
              max="5000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="form-range"
            />
          </div>

          {/* SIZE */}
          <div className="shadow rounded-4 p-4 bg-white">
            <h5 className="fw-bold mb-3">Size</h5>

            {["S", "M", "L"].map(size => (
              <div className="form-check" key={size}>
                <input
                  type="checkbox"
                  value={size}
                  className="form-check-input"
                  onChange={handleSizeChange}
                />
                <label className="form-check-label">
                  {size}
                </label>
              </div>
            ))}

            <hr />
            <p><strong>Selected:</strong> {sizes.join(", ") || "None"}</p>
          </div>

        </div>

        {/* PRODUCTS */}
        <div className="col-lg-9">

          {/* TOP BAR */}
          <div className="d-flex justify-content-between align-items-center bg-light rounded-4 p-3 mb-4">
            <p className="mb-0 fw-semibold">
              Showing {total === 0 ? 0 : start}-{end} of {total}
            </p>

            <select className="form-select w-auto">
              <option>Default</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>

          {/* GRID */}
          <div className="row g-4">

            {paginatedProducts.map((item) => (
              <div className="col-lg-4 col-md-6" key={item._id}>
                <div className="card border-0 shadow rounded-4 h-100">

                  <img
                    src={item.photo1}
                    height="400"
                    className="card-img-top"
                    style={{ objectFit: "cover" }}
                    alt=""
                  />

                  <div className="card-body text-center">

                    <h5 className="fw-bold">
                      <Link
                        to={`/productdetail/${item._id}`}
                        className="text-dark text-decoration-none"
                      >
                        {item.title}
                      </Link>
                    </h5>

                    <p className="text-warning">★★★★★</p>

                    <h6 className="text-success fw-bold">
                      ₹{item.sellingprice}
                    </h6>

                    <div className="d-flex gap-2 mt-3">
                      <button
                        className="btn btn-dark w-100"
                        onClick={() => addToCart(item)}
                      >
                        🛒 Add
                      </button>

                      <WishlistButton productId={item._id} />
                    </div>

                  </div>
                </div>
              </div>
            ))}

          </div>

          {/* PAGINATION */}
          <div className="text-center mt-5">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`btn mx-1 ${
                  currentPage === i + 1
                    ? "btn-dark"
                    : "btn-outline-dark"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}