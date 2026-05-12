import { Outlet, Link,useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Layout()
{
   const navigate = useNavigate();
    
    const [userInfo, setUserInfo] = useState(null);
    const [userId, setUserId] = useState("");
  
    useEffect(() => {
      const info = localStorage.getItem("userInfo");
      if (info) {
        const parsed = JSON.parse(info);
        setUserInfo(parsed);
        setUserId(parsed._id); // Adjust if your ID key is different
      }
    }, []);
  
    const logoutHandler = () => {
      localStorage.removeItem("userInfo");
      setUserInfo(null);
      navigate("/userlogin"); // redirect after logout
    };
    return(
        <>
        <div className="container-fluid p-0">
    <header>
    <nav class="navbar navbar-expand-lg custom-navbar">
  <div class="container-fluid">
    <a class="navbar-brand logo-text" href="#">FitFolio</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class=" nav-item">
          <Link class="nav-link active custom-nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link custom-nav-link" to="/Women">Women's</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link custom-nav-link" to="/men">Men's</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link custom-nav-link" to="/kids">Kid's</Link>
        </li>
        <li className="nav-item dropdown position-relative">
  <a
    className="nav-link dropdown-toggle custom-nav-link"
    href="#"
    role="button"
    data-bs-toggle="dropdown"
  >
    Pages
  </a>

  <ul className="dropdown-menu premium-dropdown p-2">
    
    <li>
      <Link className="dropdown-item premium-item" to="/cosmetics">
        <i className="bi bi-brush me-2 text-danger"></i>
        Cosmetics
      </Link>
    </li>

    <li>
      <Link className="dropdown-item premium-item" to="/accessories">
        <i className="bi bi-bag-heart me-2 text-primary"></i>
        Accessories
      </Link>
    </li>

  </ul>
</li>
        <li class="nav-item">
          <Link class="nav-link custom-nav-link" to="/Blogs">Blog</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link custom-nav-link me-5" aria-current="page" to="/Contact">Contact</Link>
        </li>
      </ul>
      <Link class="nav-link ms-5 text-primary" to="/Login">Admin Login</Link>
      
      <a href=""><i class="bi bi-search text-info fs-4 mx-2"></i></a>
      <a href=""><i class="bi bi-heart-fill fs-4 text-danger mx-2"></i></a>

{/* 👤 User Section Without Dropdown */}

{
  userInfo ? (

    <div className="d-flex align-items-center gap-3">

      {/* MY ORDERS */}
      <Link
        to={`/MyOrders/${userId}`}
        className="text-decoration-none"
      >
        <div
          className="d-flex align-items-center gap-2 px-3 py-2"
          
        >
          <i className="bi bi-box-seam fs-5"></i>
          <span>My Orders</span>
        </div>
      </Link>

      {/* CART */}
      <Link
        to={`/CartPage/${userId}`}
        className="text-decoration-none"
      >
        <div
          className="d-flex align-items-center gap-2 px-3 py-2"
          >
          <i className="bi bi-cart2 fs-4 text-success"></i>
          <span>My Cart</span>
        </div>
      </Link>

      {/* PROFILE */}
      <Link
        to="/profile"
        className="text-decoration-none"
      >
        <div
          className="d-flex align-items-center gap-2"
          style={{
            background: "rgba(255,255,255,0.08)",
            padding: "6px 14px",
            borderRadius: "50px"
          }}
        >

          {/* AVATAR */}
          <div
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "50%",
              background:
                "linear-gradient(135deg,#667eea,#764ba2)",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              overflow: "hidden"
            }}
          >
            {
              userInfo.photo ? (
                <img
                  src={userInfo.photo}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                  }}
                />
              ) : (
                userInfo.name?.charAt(0).toUpperCase()
              )
            }
          </div>

          {/* NAME */}
          <div className="text-white">

            <small
              style={{
                opacity: "0.8",
                fontSize: "11px"
              }}
            >
              Welcome
            </small>

            <div
              style={{
                fontWeight: "600",
                fontSize: "14px"
              }}
            >
              {userInfo.name}
            </div>

          </div>

        </div>
      </Link>

      {/* LOGOUT */}
      <button
        onClick={logoutHandler}
        className="btn btn-danger rounded-pill px-4"
      >
        <i className="bi bi-box-arrow-right me-2"></i>
        Logout
      </button>

    </div>

  ) : (

    <Link
      className="btn text-warning px-4"
      to="/signup"
    >
      <i className="bi bi-person me-2"></i>
      Login/Sign up
    </Link>

  )
}


 

      
    </div>
  </div>
</nav>
</header>

{/* 👤 User Section
                {userInfo ? (
                  <>
                    
                      <Link className="nav-link ms-5" onClick={logoutHandler}>
                        Logout
                      </Link>
                    
                      <Link className="nav-link ms-5" to={`/MyOrders/${userId}`}>
                        My Orders
                      </Link>
                   
                      <Link className="nav-link ms-5" to={`/CartPage/${userId}`}>
                        <i className="bi bi-bag"></i>
                      </Link>
                    
                  </>
                ) : (
                  
                    <Link className="nav-link" to="/signup">
                      <i className="bi bi-person"></i>
                    </Link>
                 
                )} */}

      {/* <Link class="nav-link ms-5" to="/UserLogin">UserLogin</Link>  
      <>
      <li className="nav-item px-2">
        <Link className="nav-link text-white" onClick={logoutHandler}>Logout</Link>
        </li>
        <li className="nav-item px-2">
        <Link className="nav-link text-white" to={`/CartPage/${userId}`}>Cart</Link>
        </li>
        <li className="nav-item px-2">
        <Link className="nav-link text-white" to={`/MyOrder/${userId}`}>MyOrder</Link>
        </li> */}
        
        {/* </> */}


<Outlet/>


<footer className="footer-style text-light">

  <div className="container-fluid px-lg-5 px-4 py-5">

    <div className="row gy-5">

      {/* LOGO */}
      <div className="col-lg-3 col-md-6">

        <h1 className="text-danger fw-bold mb-4">
          FitFolio
        </h1>

        <p className="footer-text">
          A small river named Duden flows by their place and
          supplies it with the necessary regelialia.
        </p>

        <a href="" className="footer-link">
          Read more...
        </a>

        {/* PAYMENT */}
        <div className="d-flex gap-3 mt-4">

          <div className="payment-card">
            <img src="images/visa.png" alt="" />
          </div>

          <div className="payment-card">
            <img src="images/gpay.png" alt="" />
          </div>

          <div className="payment-card">
            <img src="images/master.png" alt="" />
          </div>

        </div>

      </div>

      {/* QUICK LINKS */}
      <div className="col-lg-3 col-md-6">

        <h5 className="footer-heading">
          QUICK LINKS
        </h5>

        <div className="footer-links">

          <a href="/about">About</a>
          <a href="/blogs">Blogs</a>
          <a href="/contact">Contact</a>
          <a href="/faq">FAQ</a>

        </div>

      </div>

      {/* ACCOUNT */}
      <div className="col-lg-3 col-md-6">

        <h5 className="footer-heading">
          ACCOUNT
        </h5>

        <div className="footer-links">

          <a href="">My Account</a>
          <a href="">Orders Tracking</a>
          <a href="">Checkout</a>
          <a href="">Wishlist</a>

        </div>

      </div>

      {/* NEWSLETTER */}
      <div className="col-lg-3 col-md-6">

        <h5 className="footer-heading">
          NEWSLETTER
        </h5>

        {/* FORM */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Subscribed Successfully!");
          }}
        >

          <div className="input-group newsletter-box">

            <input
              type="email"
              className="form-control newsletter-input"
              placeholder="Enter email address"
              required
            />

            <button
              className="btn newsletter-btn"
              type="submit"
            >
              <i className="bi bi-telegram"></i>
            </button>

          </div>

        </form>

        {/* SOCIAL */}
        <h5 className="footer-heading mt-5 mb-3">
          Follow us
        </h5>

        <div className="d-flex gap-3">

          <div className="social-icon">
            <i className="bi bi-twitter"></i>
          </div>

          <div className="social-icon">
            <i className="bi bi-facebook"></i>
          </div>

          <div className="social-icon">
            <i className="bi bi-instagram"></i>
          </div>

        </div>

      </div>

    </div>

  </div>

  {/* COPYRIGHT */}
  <div className="copyright-wrapper">

    <div className="container-fluid p-5">

      <div className="row align-items-center gy-3 m-0 px-5">

        <div className="col-lg-8 text-center text-lg-start">

          <p className="copyright-text mb-0">
            Copyright ©2026 All rights reserved |
            This template is made by Colorlib.com
          </p>

        </div>

        <div className="col-lg-4">

          <div className="d-flex justify-content-lg-end justify-content-center gap-4">

            <button className="footer-bottom-btn">
              Terms
            </button>

            <button className="footer-bottom-btn">
              Privacy
            </button>

            <button className="footer-bottom-btn">
              Compliances
            </button>

          </div>

        </div>

      </div>

    </div>

  </div>

</footer>

</div>
        </>
    );
}