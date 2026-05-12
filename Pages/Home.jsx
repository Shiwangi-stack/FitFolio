// import { Link } from "react-router-dom"
// import { useState, useEffect } from "react";


// function ProductDiv(props)
// {
//   return (
//     <div className="col-lg-3 mb-4">
//       <div className="card border-0 shadow-sm product-card">
//         <div className="overflow-hidden">
//           <img
//             src="images/Buttons Tweed Blazer11.webp"
//             className="card-img-top product-img"
//             alt=""
//           />
//         </div>

//         <div className="card-body text-start">
//           <h6 className="fw-semibold">Buttons Tweed Blazer</h6>

//           <div className="text-warning small mb-2">
//             ★★★★★
//           </div>

//           <h5 className="fw-bold">$59.00</h5>
//         </div>
//       </div>
//     </div>
//   );
// }
// function HomeDiv(props)
// {
//   return (
//     <div className="col-lg-6 p-2">
//       <div
//         className="category-card"
//         style={{ backgroundImage: `url(./images/${props.bg})` }}
//       >
//         <div className="overlay">
//           <h3>{props.title}</h3>
//           <p>{props.items} items</p>
//           <button className="btn btn-outline-light btn-sm">SHOP NOW</button>
//         </div>
//       </div>
//     </div>
//   );
// }
// function TrendDiv()
// {
//   return (
//     <div className="col-lg-4">
//       <h5 className="mb-4 fw-bold border-bottom pb-2">HOT TRENDS</h5>

//       {[1, 2, 3].map((item, index) => (
//         <div className="d-flex mb-3 trend-card" key={index}>
//           <img src="images/bag.jpg" width="90" className="rounded" />
//           <div className="ms-3">
//             <h6 className="mb-1">Chain bucket bag</h6>
//             <div className="text-warning small">★★★★★</div>
//             <span className="fw-bold">$59.00</span>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
// function ImageDiv()
// {
//   return(
//     <div className="col-lg-2 p-0">
//     <a href=""><img src="images/Cotton T-Shirt.webp" width="100%" alt="" /></a>
//   </div>
  
//   )
// }










// function Home() {

// const [men, setMen] = useState([]);
// const [women, setWomen] = useState([]);
// const [kids, setKids] = useState([]);

//   useEffect(() => {
//   fetch("http://localhost:5000/api/getproduct")
//     .then(res => res.json())
//     .then(data => {
//       setMen(data.filter(i => i.gender === "Male"));
//       setWomen(data.filter(i => i.gender === "Female"));
//       setKids(data.filter(i => i.category === "Kids"));
//     });
// }, []);

//   return (
//     <>
//     <div className='container-fluid text-center p-0'>

// {/* image section start */}
//         <section className='row mt-1' id="image"  >
//             <div className="col-lg-6">
//   <div
//     className="hero-banner"
//     style={{ backgroundImage: `url(images/1.jpg)` }}
//   >
//     <div className="overlay">
//       <h1>Women's Fashion</h1>
//       <p>Discover premium styles curated for you</p>
//       <Link className="btn btn-outline-light" to="/Women">
//         SHOP NOW
//       </Link>
//     </div>
//   </div>
// </div>

//             <div className="col-lg-6">
//               <div className="row">
               
//                 <HomeDiv bg="2.jpg" title="Men's fashion" items="358" link="/men" />
//                   <HomeDiv bg="3.jpg" title="Kids's fashion" items="158" link="/kids" />
//                    <HomeDiv bg="4.webp" title="Accessories" items="58" link="/accessories" />
//                     <HomeDiv bg="5.jpg" title="Cosmetics" items="35" link="/cosmetics" />

                
//               </div>
//             </div>
//         </section>
// {/* image section start */}

// {/* mid nav start */}
// <div className="row p-5">
//   <div className="col-lg-4">
//     <h4 className=""><u>NEW PRODUCT</u></h4>
//   </div>
//   <div className="col-lg-8">
//     <ul class="nav nav-underline justify-content-end mb-3" id="pills-tab" role="tablist">
//   <li class="nav-item" role="presentation">
//     <button class="nav-link active" id="pills-all-tab" data-bs-toggle="pill" data-bs-target="#pills-all" type="button" role="tab" aria-controls="pills-all" aria-selected="true">All</button>
//   </li>
//   <li class="nav-item" role="presentation">
//     <button class="nav-link" id="pills-women-tab" data-bs-toggle="pill" data-bs-target="#pills-women" type="button" role="tab" aria-controls="pills-women" aria-selected="false">Women's</button>
//   </li>
//   <li class="nav-item" role="presentation">
//     <button class="nav-link" id="pills-men-tab" data-bs-toggle="pill" data-bs-target="#pills-men" type="button" role="tab" aria-controls="pills-men" aria-selected="false">Men's</button>
//   </li>
//   <li class="nav-item" role="presentation">
//     <button class="nav-link" id="pills-kid-tab" data-bs-toggle="pill" data-bs-target="#pills-kid" type="button" role="tab" aria-controls="pills-kid" aria-selected="false">Kid's</button>
//   </li>
//   <li class="nav-item" role="presentation">
//     <button class="nav-link" id="pills-cosmetics-tab" data-bs-toggle="pill" data-bs-target="#pills-cosmetics" type="button" role="tab" aria-controls="pills-cosmetics" aria-selected="false">Cosmetics</button>
//   </li>
//   <li class="nav-item" role="presentation">
//     <button class="nav-link" id="pills-Accessories-tab" data-bs-toggle="pill" data-bs-target="#pills-Accessories" type="button" role="tab" aria-controls="pills-Accessories" aria-selected="false">Accessories</button>
//   </li>
// </ul>
// </div>
// <div class="tab-content" id="pills-tabContent">
//   <div class="tab-pane fade show active" id="pills-all" role="tabpanel" aria-labelledby="pills-all-tab" tabindex="0">
//  <div className="row">
//   <ProductDiv/>
//   <ProductDiv/>
//   <ProductDiv/>
//   <ProductDiv/>
//   <ProductDiv/></div>
//   </div>
//   <div class="tab-pane fade" id="pills-women" role="tabpanel" aria-labelledby="pills-women-tab" tabindex="0">
//     <div className="row">
//   <ProductDiv/>
//   <ProductDiv/>
//   <ProductDiv/>
//   <ProductDiv/>
//   <ProductDiv/></div>
//   </div>
//   <div class="tab-pane fade" id="pills-men" role="tabpanel" aria-labelledby="pills-men-tab" tabindex="0">
//      <div className="row">
//     <ProductDiv/> <ProductDiv/></div>
//     </div>
//   <div class="tab-pane fade" id="pills-kid" role="tabpanel" aria-labelledby="pills-kid-tab" tabindex="0">
//     <div className="row">
//     <ProductDiv/></div>
//     </div>
//   <div class="tab-pane fade" id="pills-cosmetics" role="tabpanel" aria-labelledby="pills-cosmetics-tab" tabindex="0"></div>
//   <div class="tab-pane fade" id="pills-Accessories" role="tabpanel" aria-labelledby="pills-Accessories-tab" tabindex="0">
//     <div className="row">
//     <ProductDiv/></div>
//     </div>
// </div>


  
// </div>
// {/* mid nav end */}

// {/* product section start */}

// {/* <div className="row px-5">
//   <ProductDiv/>
//   <ProductDiv/>
//   <ProductDiv/>
//   <ProductDiv/>
//   <ProductDiv/>
//   <ProductDiv/>
//   <ProductDiv/>
//   <ProductDiv/>
  
// </div> */}
// {/* Product section end */}

// {/* banner section start */}

// <div id="carouselExampleCaptions" class="carousel slide">
//   <div class="carousel-indicators">
//     <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
//     <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
//     <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
//   </div>
//   <div class="carousel-inner ">
//     <div class="carousel-item active ">
//       <img src="images/banner1.jpg" height="400px" width="100%" class="d-block w-100" alt="..."/>
//       <div class="carousel-caption d-none d-md-block text-start">
//         <h2 className="text-black fw-bold">The Choice Collection</h2>
//         <p className="text-black">The Project Jacket</p>
//         <button className="btn btn-outline-dark">Discover</button>
//       </div>
//     </div>
//     <div class="carousel-item">
//       <img src="images/banner.jpg" height="400px" width="100%" class="d-block w-100" alt="..."/>
//       <div class="carousel-caption d-none d-md-block text-start ">
//         <h2 className="text-black fw-bold">Summer Essentials</h2>
//         <p className="text-black">Linen Breeze Dress</p>
//         <button className="btn btn-outline-dark">Discover</button>
//       </div>
//     </div>
//     <div class="carousel-item">
//       <img src="images/banner2.webp" height="400px" width="100%" class="d-block w-100" alt="..."/>
//       <div class="carousel-caption d-none d-md-block text-start">
//         <h2 className="text-black fw-bold">New Arrivals</h2>
//         <p className="text-black">Urban Street Style</p>
//         <button className="btn btn-outline-dark">Discover</button>
//       </div>
//     </div>
//   </div>
//   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Previous</span>
//   </button>
//   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Next</span>
//   </button>
// </div>
// {/* banner section end */}

// {/* trend section start */}

// <section className="mt-5 px-5">
// <div className="row">
//   <TrendDiv/>
//   <TrendDiv/>
//   <TrendDiv/>
// </div>
// </section>

// {/* trend section end */}

// {/* discount section start */}

// <div className="row mt-5 p-5">
//   <div className="col-lg-6 p-0">
//     <img src="images/12.jpg" width="100%" height="auto" alt="" />
//   </div>
//   <div className="col-lg-6 bg-secondary-subtle p-5">
//     <h5>Discount</h5>
//     <h1 className="text-danger">Summer 2030</h1>
//     <h5>Sale 50%</h5>
//     <button className="btn btn-success mt-5">Shop Now</button>
//   </div>
// </div>

// {/* discount section end */}

// {/* Facilities section start */}
// <div className="row mt-5 mb-5">
//   <div className="col-lg-3">
//     <i class="bi bi-truck text-primary fs-1"></i>
//     <h5>Free Shipping</h5>
//     <p className="text-muted">For all oder over $99</p>
//   </div>
//   <div className="col-lg-3">
//     <i class="bi bi-cash-stack text-success fs-1"></i>
//     <h5>Money Back Guarantee</h5>
//     <p className="text-muted">If good have Problems</p>
//   </div>
//   <div className="col-lg-3">
//     <i class="bi bi-headset text-warning fs-1"></i>
//     <h5>Online Support 24/7</h5>
//     <p className="text-muted">Dedicated support</p>
//   </div>
//   <div className="col-lg-3">
//     <i class="bi bi-wallet text-danger fs-1"></i>
//     <h5>Payment Secure</h5>
//     <p className="text-muted">100% secure payment</p>
//   </div>
// </div>
// {/* Facilities section end */}

// {/* Image section start */}

// <div className="row p-0 mb-5">
//   <ImageDiv/>
//   <ImageDiv/>
//   <ImageDiv/>
//   <ImageDiv/>
//   <ImageDiv/>
//   <ImageDiv/>
// </div>
// {/* Image section end */}

//     </div>






//     </>
//   )
// }


// export default Home

// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";

// /* ================= PRODUCT CARD ================= */
// function ProductDiv({ item }) {
//   return (
//     <div className="col-lg-3 mb-4">
//       <div className="card border-0 shadow-sm product-card">
//         <div className="overflow-hidden">
//           <img
//             src={item?.photo1 || "images/placeholder.jpg"}
//             className="card-img-top product-img"
//             alt=""
//           />
//         </div>

//         <div className="card-body text-start">
//           <h6 className="fw-semibold">{item?.title}</h6>

//           <div className="text-warning small mb-2">★★★★★</div>

//           <h5 className="fw-bold">${item?.price || 59}</h5>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ================= HOME DIV (NO CHANGE) ================= */
// function HomeDiv(props) {
//   return (
//     <div className="col-lg-6 p-2">
//       <Link to={props.link} style={{ textDecoration: "none" }}>
//         <div
//           className="category-card"
//           style={{
//             backgroundImage: `url(./images/${props.bg})`,
//             height: "250px",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             borderRadius: "10px",
//             position: "relative",
//           }}
//         >
//           <div
//             className="overlay"
//             style={{
//               position: "absolute",
//               top: 0,
//               left: 0,
//               right: 0,
//               bottom: 0,
//               background: "rgba(0,0,0,0.4)",
//               color: "white",
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "center",
//               alignItems: "center",
//               borderRadius: "10px",
//             }}
//           >
//             <h3>{props.title}</h3>
//             <p>{props.items} items</p>
//             <button className="btn btn-outline-light btn-sm">
//               SHOP NOW
//             </button>
//           </div>
//         </div>
//       </Link>
//     </div>
//   );
// }

// /* ================= MAIN HOME ================= */
// export default function Home() {
//   const [products, setProducts] = useState([]);
//   const [activeTab, setActiveTab] = useState("all");

//   useEffect(() => {
//     fetch("http://localhost:5000/api/getproduct")
//       .then((res) => res.json())
//       .then((data) => setProducts(data))
//       .catch((err) => console.log(err));
//   }, []);

//   /* ================= FIXED FILTERS ================= */
//   const men = products.filter(
//     (item) => item.gender?.toLowerCase() === "male"
//   );

//   const women = products.filter(
//     (item) => item.gender?.toLowerCase() === "women"
//   );

//   const kids = products.filter(
//     (item) => item.category?.toLowerCase() === "kids"
//   );

//   const cosmetics = products.filter(
//     (item) => item.category?.toLowerCase() === "cosmetics"
//   );

//   const accessories = products.filter(
//     (item) => item.category?.toLowerCase() === "accessories"
//   );

//   /* ================= TAB DATA ================= */
//   const getTabProducts = () => {
//     if (activeTab === "women") return women;
//     if (activeTab === "men") return men;
//     if (activeTab === "kids") return kids;
//     if (activeTab === "cosmetics") return cosmetics;
//     if (activeTab === "accessories") return accessories;
//     return products;
//   };

//   const tabProducts = getTabProducts();

//   return (
//     <>
//       <div className="container-fluid text-center p-0">

//         {/* ================= IMAGE SECTION (UNCHANGED) ================= */}
//         <section className="row mt-1" id="image">
//           <div className="col-lg-6">
//             <div
//               className="hero-banner"
//               style={{ backgroundImage: `url(images/1.jpg)` }}
//             >
//               <div className="overlay">
//                 <h1>Women's Fashion</h1>
//                 <p>Discover premium styles curated for you</p>
//                 <Link className="btn btn-outline-light" to="/Women">
//                   SHOP NOW
//                 </Link>
//               </div>
//             </div>
//           </div>

//           <div className="col-lg-6">
//             <div className="row">
//               <HomeDiv bg="2.jpg" title="Men's fashion" items="358" link="/men" />
//               <HomeDiv bg="3.jpg" title="Kids's fashion" items="158" link="/kids" />
//               <HomeDiv bg="4.webp" title="Accessories" items="58" link="/accessories" />
//               <HomeDiv bg="5.jpg" title="Cosmetics" items="35" link="/cosmetics" />
//             </div>
//           </div>
//         </section>

//         {/* ================= MID NAV (ONLY FIXED CLICK LOGIC) ================= */}
//         <div className="row p-5">
//           <div className="col-lg-4">
//             <h4><u>NEW PRODUCT</u></h4>
//           </div>

//           <div className="col-lg-8">
//             <ul className="nav nav-underline justify-content-end mb-3">

//               <li className="nav-item">
//                 <button
//                   className={`nav-link ${activeTab === "all" ? "active" : ""}`}
//                   onClick={() => setActiveTab("all")}
//                 >
//                   All
//                 </button>
//               </li>

//               <li className="nav-item">
//                 <button
//                   className={`nav-link ${activeTab === "women" ? "active" : ""}`}
//                   onClick={() => setActiveTab("women")}
//                 >
//                   Women's
//                 </button>
//               </li>

//               <li className="nav-item">
//                 <button
//                   className={`nav-link ${activeTab === "men" ? "active" : ""}`}
//                   onClick={() => setActiveTab("men")}
//                 >
//                   Men's
//                 </button>
//               </li>

//               <li className="nav-item">
//                 <button
//                   className={`nav-link ${activeTab === "kids" ? "active" : ""}`}
//                   onClick={() => setActiveTab("kids")}
//                 >
//                   Kid's
//                 </button>
//               </li>

//               <li className="nav-item">
//                 <button
//                   className={`nav-link ${activeTab === "cosmetics" ? "active" : ""}`}
//                   onClick={() => setActiveTab("cosmetics")}
//                 >
//                   Cosmetics
//                 </button>
//               </li>

//               <li className="nav-item">
//                 <button
//                   className={`nav-link ${activeTab === "accessories" ? "active" : ""}`}
//                   onClick={() => setActiveTab("accessories")}
//                 >
//                   Accessories
//                 </button>
//               </li>

//             </ul>
//           </div>

//           {/* ================= TAB PRODUCTS (FIXED) ================= */}
//           <div className="tab-content">
//             <div className="row">
//               {tabProducts.map((item) => (
//                 <ProductDiv key={item._id} item={item} />
//               ))}
//             </div>
//           </div>
//         </div>

//       </div>
      
//     </>
//   );
// }

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

/* ================= PRODUCT CARD ================= */
function ProductDiv({ item }) {
  return (
    <div className="col-lg-3 mb-4">
      <div className="card border-0 shadow-sm product-card">
        <div className="overflow-hidden">
          <img
            src={item?.photo1 || "images/Buttons Tweed Blazer11.webp"}
            className="card-img-top product-img"
            alt=""
          />
        </div>

        <div className="card-body text-start">
          <Link className="nav-link"to={`/productdetail/${item._id}`} style={{ textDecoration: "none" }}>
            <h6 className="fw-semibold">{item?.title}</h6>
          </Link>
          <div className="text-warning small mb-2">★★★★★</div>
          <h5 className="fw-bold">Rs. {item?.sellingprice}</h5>
        </div>
      </div>
    </div>
  );
}

/* ================= HOME DIV ================= */
function HomeDiv(props) {
  return (
    <div className="col-lg-6 p-3">

      <Link
        to={props.link}
        style={{ textDecoration: "none" }}
      >

        <div
          className="premium-category-card"
          style={{
            backgroundImage: `url(./images/${props.bg})`,
          }}
        >

          {/* DARK OVERLAY */}
          <div className="premium-overlay">

            {/* SMALL LABEL */}
            <span className="premium-tag">
              NEW COLLECTION
            </span>

            {/* TITLE */}
            <h2 className="premium-title">
              {props.title}
            </h2>

            {/* SUBTITLE */}
            <p className="premium-subtitle">
              {props.items} Premium Products
            </p>

            {/* BUTTON */}
            <button className="premium-btn">
              SHOP NOW →
            </button>

          </div>

        </div>

      </Link>

    </div>
  );
}

/* ================= TREND ================= */
function TrendDiv() {
  return (
    <div className="col-lg-4">
      <h5 className="mb-4 fw-bold border-bottom pb-2">HOT TRENDS</h5>

      {[1, 2, 3].map((i) => (
        <div className="d-flex mb-3 trend-card" key={i}>
          <img src="images/bag.jpg" width="90" className="rounded" />
          <div className="ms-3">
            <h6>Chain bucket bag</h6>
            <div className="text-warning small">★★★★★</div>
            <span className="fw-bold">$59.00</span>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ================= IMAGE ================= */
function ImageDiv(props) {
  return (
    <div className="col-lg-2 col-md-4 col-6 p-2">

      <div className="gallery-card">

        <img
          src={`images/${props.photo}`}
          className="gallery-img"
          alt=""
        />

      </div>

    </div>
  );
}

/* ================= HOME ================= */
export default function Home() {
  const [products, setProducts] = useState([]);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    fetch("http://localhost:5000/api/getproduct")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  /* ================= FILTERS ================= */
  const men = products.filter(
    (item) => item.gender?.toLowerCase() === "male"
  );

  const women = products.filter(
    (item) => item.gender?.toLowerCase() === "women"
  );

  const kids = products.filter(
    (item) => item.category?.toLowerCase() === "kids"
  );

  const cosmetics = products.filter(
    (item) => item.category?.toLowerCase() === "cosmetics"
  );

  const accessories = products.filter(
    (item) => item.category?.toLowerCase() === "accessories"
  );

  const getTabProducts = () => {
    if (activeTab === "women") return women;
    if (activeTab === "men") return men;
    if (activeTab === "kids") return kids;
    if (activeTab === "cosmetics") return cosmetics;
    if (activeTab === "accessories") return accessories;
    return products;
  };

  return (
    <>
      <div className="container-fluid text-center p-0">

        {/* ================= IMAGE SECTION ================= */}
        <section className="row mt-1" id="image">
          <div className="col-lg-6 p-3">

  <div
    className="premium-hero-banner"
    style={{
      backgroundImage: `url(images/1.jpg)`
    }}
  >

    {/* OVERLAY */}
    <div className="premium-hero-overlay">

      {/* SMALL TAG */}
      <span className="premium-badge">
        NEW ARRIVAL
      </span>

      {/* TITLE */}
      <h1 className="premium-hero-title">
        Women's Fashion
      </h1>

      {/* SUBTITLE */}
      <p className="premium-hero-text">
        Discover premium styles curated for you
      </p>

      {/* BUTTON */}
      <Link
        className="premium-hero-btn"
        to="/Women"
      >
        SHOP NOW →
      </Link>

    </div>

  </div>

</div>

          <div className="col-lg-6">
            <div className="row">
              <HomeDiv bg="2.jpg" title="Men's fashion" items="358" link="/men" />
              <HomeDiv bg="3.jpg" title="Kids's fashion" items="158" link="/kids" />
              <HomeDiv bg="5.jpg" title="Accessories" items="58" link="/accessories" />
              <HomeDiv bg="Cosmetics.webp" title="Cosmetics" items="35" link="/cosmetics" />
            </div>
          </div>
        </section>

        {/* ================= MID NAV ================= */}
        <div className="row align-items-center px-4 py-5 bg-light rounded-4 shadow-sm mx-2 my-5">

  {/* LEFT TITLE */}
  <div className="col-lg-4 mb-4 mb-lg-0">
    <div>
      <p className="text-uppercase text-muted mb-1 letter-spacing">
        Trending Collection
      </p>

      <h2 className="fw-bold display-6 mb-0">
        New Products
      </h2>

      <div
        style={{
          width: "80px",
          height: "4px",
          background: "#000",
          borderRadius: "10px",
          marginTop: "10px",
        }}
      ></div>
    </div>
  </div>

  {/* CREATIVE NAV */}
  <div className="col-lg-8">

    <div className="d-flex flex-wrap justify-content-lg-end gap-3">

      <button
        className={`btn rounded-pill px-4 py-2 fw-semibold shadow-sm 
        ${activeTab === "all"
            ? "btn-dark text-white"
            : "btn-light border"}`}
        onClick={() => setActiveTab("all")}
      >
        ✨ All
      </button>

      <button
        className={`btn rounded-pill px-4 py-2 fw-semibold shadow-sm 
        ${activeTab === "women"
            ? "btn-dark text-white"
            : "btn-light border"}`}
        onClick={() => setActiveTab("women")}
      >
        👗 Women's
      </button>

      <button
        className={`btn rounded-pill px-4 py-2 fw-semibold shadow-sm 
        ${activeTab === "men"
            ? "btn-dark text-white"
            : "btn-light border"}`}
        onClick={() => setActiveTab("men")}
      >
        👔 Men's
      </button>

      <button
        className={`btn rounded-pill px-4 py-2 fw-semibold shadow-sm 
        ${activeTab === "kids"
            ? "btn-dark text-white"
            : "btn-light border"}`}
        onClick={() => setActiveTab("kids")}
      >
        🧸 Kid's
      </button>

      <button
        className={`btn rounded-pill px-4 py-2 fw-semibold shadow-sm 
        ${activeTab === "cosmetics"
            ? "btn-dark text-white"
            : "btn-light border"}`}
        onClick={() => setActiveTab("cosmetics")}
      >
        💄 Cosmetics
      </button>

      <button
        className={`btn rounded-pill px-4 py-2 fw-semibold shadow-sm 
        ${activeTab === "accessories"
            ? "btn-dark text-white"
            : "btn-light border"}`}
        onClick={() => setActiveTab("accessories")}
      >
        👜 Accessories
      </button>

    </div>

  </div>

  {/* PRODUCTS */}
  <div className="tab-content mt-5">
    <div className="row">
      {getTabProducts().map((item) => (
        <ProductDiv key={item._id} item={item} />
      ))}
    </div>
  </div>

</div>

        {/* ================= TREND ================= */}
        <section className="mt-5 px-5">
          <div className="row">
            <TrendDiv />
            <TrendDiv />
            <TrendDiv />
          </div>
        </section>

        {/* ================= DISCOUNT ================= */}
        <div className="row mt-5 p-5">
          <div className="col-lg-6 p-0">
            <img src="images/12.jpg" width="100%" />
          </div>
          <div className="col-lg-6 bg-secondary-subtle p-5">
            <h5>Discount</h5>
            <h1 className="text-danger">Summer 2030</h1>
            <h5>Sale 50%</h5>
            <button className="btn btn-success mt-5">Shop Now</button>
          </div>
        </div>

        {/* ================= FACILITIES ================= */}
        <div className="row mt-5 mb-5">
  <div className="col-lg-3">
    <i class="bi bi-truck text-primary fs-1"></i>
     <h5>Free Shipping</h5>
     <p className="text-muted">For all oder over $99</p>
   </div>
   <div className="col-lg-3">
     <i class="bi bi-cash-stack text-success fs-1"></i>
     <h5>Money Back Guarantee</h5>
     <p className="text-muted">If good have Problems</p>
   </div>
   <div className="col-lg-3">
     <i class="bi bi-headset text-warning fs-1"></i>
     <h5>Online Support 24/7</h5>
     <p className="text-muted">Dedicated support</p>
   </div>   <div className="col-lg-3">
     <i class="bi bi-wallet text-danger fs-1"></i>
     <h5>Payment Secure</h5>
     <p className="text-muted">100% secure payment</p>
</div></div>

        {/* ================= IMAGE GRID ================= */}
        <div className="row">

  <ImageDiv photo="n1.jpg"/>
  <ImageDiv photo="i2.avif"/>
  <ImageDiv photo="n5.webp"/>
  <ImageDiv photo="i4.jpg"/>
  <ImageDiv photo="n2.jpg"/>
  <ImageDiv photo="n3.jpg"/>

</div>

      </div>
    </>
  );
}