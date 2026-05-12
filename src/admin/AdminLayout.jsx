// import { useAuth } from "../../Pages/AuthProvider"
// import { Link, Outlet  } from "react-router-dom"

// export default function AdminLayout()
// {
//     const auth=useAuth()
//     const handleClick=()=>{
//         auth.logOut()
//     }

//     return(
//         <>
//         <div class="container-fluid">
//     <div class="row flex-nowrap">
//         <div class="col-auto col-md-3 col-xl-2 px-sm-2 bg-primary-subtle">
//             <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
//                 <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
//                     <span class="fs-1 d-none d-sm-inline text-danger fst-italic fw-bold">ASHION</span>
//                 </a>
//                 <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
//                     <li class="nav-item">
//                         <Link to="/dashboard" class="nav-link align-middle px-0">
//                             <i class="fs-4 bi-house "></i> <span class="ms-1 d-none d-sm-inline text-black">Home</span>
//                         </Link>
//                     </li>
//                     <li>
//                         <Link to="/blogs" onClick={(e)=>e.preventDefault()} data-bs-toggle="collapse" data-bs-target="#submenuBlogs" class="nav-link px-0 align-middle">
//                             <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline text-black">Blogs</span> </Link>
//                         <ul class="collapse show nav flex-column ms-1" id="submenuBlogs" data-bs-parent="#menu">
//                             <li class="w-100">
//                                 <Link to="/addblog" class="nav-link px-0"> <span class="d-none d-sm-inline text-black">Add Blog</span> 1 </Link>
//                             </li>
//                             <li>
//                                 <Link to="/viewblog" class="nav-link px-0"> <span class="d-none d-sm-inline text-black">View Blog</span> 2 </Link>
//                             </li>
//                         </ul>
//                     </li>
//                     <li>
//                         <Link to="/category" onClick={(e)=>e.preventDefault()} data-bs-toggle="collapse" data-bs-target="#submenuCategory" class="nav-link px-0 align-middle">
//                             <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline text-black">Category</span> </Link>
//                         <ul class="collapse show nav flex-column ms-1" id="submenuCategory" data-bs-parent="#menu">
//                             <li class="w-100">
//                                 <Link to="/addcategory" class="nav-link px-0"> <span class="d-none d-sm-inline text-black">Add Category</span></Link>
//                             </li>
//                             <li>
//                                 <Link to="/viewcategory" class="nav-link px-0"> <span class="d-none d-sm-inline text-black">View Category</span></Link>
//                             </li>
//                         </ul>
//                     </li>
//                     <li>
//                         <Link to="/product" onClick={(e)=>e.preventDefault()} data-bs-toggle="collapse" data-bs-target="#submenuProduct" class="nav-link px-0 align-middle">
//                             <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline text-black">Product</span> </Link>
//                         <ul class="collapse show nav flex-column ms-1" id="submenuProduct" data-bs-parent="#menu">
//                             <li class="w-100">
//                                 <Link to="/addproduct" class="nav-link px-0"> <span class="d-none d-sm-inline text-black">Add Product</span></Link>
//                             </li>
//                             <li>
//                                 <Link to="/viewproduct" class="nav-link px-0"> <span class="d-none d-sm-inline text-black">View Product</span></Link>
//                             </li>
//                         </ul>
//                     </li>
//                     {/* <li>
//                         <a href="#submenu3" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
//                             <i class="fs-4 bi-grid"></i> <span class="ms-1 d-none d-sm-inline text-black">Products</span> </a>
//                             <ul class="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
//                             <li class="w-100">
//                                 <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline text-black">Product</span> 1</a>
//                             </li>
//                             <li>
//                                 <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline text-black">Product</span> 2</a>
//                             </li>
//                             <li>
//                                 <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline text-black">Product</span> 3</a>
//                             </li>
//                             <li>
//                                 <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline text-black">Product</span> 4</a>
//                             </li>
//                         </ul>
//                     </li> */}
//                     <li>
//                         <Link to="/AdminOrder" class="nav-link px-0 align-middle">
//                             <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline text-black">Orders</span> </Link>
//                     </li>
//                     <li>
//                         <Link to="/feedback" class="nav-link px-0 align-middle">
//                             <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline text-black">Feedback</span> </Link>
//                     </li>
//                 </ul>
//                 <hr/>
//                 <div class="dropdown pb-4">
//                     <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
//                         <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" class="rounded-circle"/>
//                         <span class="d-none d-sm-inline mx-1">Shiwangi</span>
//                     </a>
//                     <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
//                         <li><a class="dropdown-item" href="#">New project...</a></li>
//                         <li><a class="dropdown-item" href="#">Settings</a></li>
//                         <li><a class="dropdown-item" href="#">Profile</a></li>
//                         <li>
//                             <hr class="dropdown-divider"/>
//                         </li>
//                         <li><a class="dropdown-item" href="#">Sign out</a></li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//         <div class="col py-3">
//             <Outlet/>
//         </div>
//     </div>
// </div>
//         </>
//     )
// }

import { useAuth } from "../Pages/AuthProvider";
import { Link, Outlet } from "react-router-dom";

export default function AdminLayout() {

  const auth = useAuth();

  const handleClick = () => {
    auth.logOut();
  };

  return (
    <>

      <div className="container-fluid p-0">

        <div className="row g-0 flex-nowrap">

          {/* SIDEBAR */}
          <div
            className="col-auto"
            style={{
              width: "280px",
              minHeight: "100vh",
              background: "linear-gradient(180deg,#111827,#1f2937)",
              boxShadow: "4px 0px 25px rgba(0,0,0,0.1)"
            }}
          >

            <div className="d-flex flex-column h-100 p-4">

              {/* LOGO */}
              <div className="mb-5">

                <h2
                  className="fw-bold text-white"
                  style={{
                    letterSpacing: "2px"
                  }}
                >
                  FITFOLIO
                </h2>

                <small className="text-light opacity-75">
                  Premium Admin Panel
                </small>

              </div>

              {/* MENU */}
              <ul className="nav flex-column gap-2">

                {/* DASHBOARD */}
                <li className="nav-item">
                  <Link
                    to="/dashboard"
                    className="nav-link text-white px-3 py-3 rounded-4"
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      transition: "0.3s"
                    }}
                  >
                    <i className="bi bi-grid-fill me-3"></i>
                    Dashboard
                  </Link>
                </li>

                {/* BLOGS */}
                <li>

                  <Link
                    to="/blogs"
                    onClick={(e) => e.preventDefault()}
                    data-bs-toggle="collapse"
                    data-bs-target="#submenuBlogs"
                    className="nav-link text-white px-3 py-3 rounded-4"
                  >
                    <i className="bi bi-journal-text me-3"></i>
                    Blogs
                  </Link>

                  <ul
                    className="collapse show nav flex-column ms-4 mt-2"
                    id="submenuBlogs"
                  >

                    <li>
                      <Link
                        to="/addblog"
                        className="nav-link text-light"
                      >
                        + Add Blog
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/viewblog"
                        className="nav-link text-light"
                      >
                        View Blogs
                      </Link>
                    </li>

                  </ul>

                </li>

                {/* CATEGORY */}
                <li>

                  <Link
                    to="/category"
                    onClick={(e) => e.preventDefault()}
                    data-bs-toggle="collapse"
                    data-bs-target="#submenuCategory"
                    className="nav-link text-white px-3 py-3 rounded-4"
                  >
                    <i className="bi bi-tags-fill me-3"></i>
                    Categories
                  </Link>

                  <ul
                    className="collapse show nav flex-column ms-4 mt-2"
                    id="submenuCategory"
                  >

                    <li>
                      <Link
                        to="/addcategory"
                        className="nav-link text-light"
                      >
                        + Add Category
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/viewcategory"
                        className="nav-link text-light"
                      >
                        View Categories
                      </Link>
                    </li>

                  </ul>

                </li>

                {/* PRODUCT */}
                <li>

                  <Link
                    to="/product"
                    onClick={(e) => e.preventDefault()}
                    data-bs-toggle="collapse"
                    data-bs-target="#submenuProduct"
                    className="nav-link text-white px-3 py-3 rounded-4"
                  >
                    <i className="bi bi-box-seam-fill me-3"></i>
                    Products
                  </Link>

                  <ul
                    className="collapse show nav flex-column ms-4 mt-2"
                    id="submenuProduct"
                  >

                    <li>
                      <Link
                        to="/addproduct"
                        className="nav-link text-light"
                      >
                        + Add Product
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/viewproduct"
                        className="nav-link text-light"
                      >
                        View Products
                      </Link>
                    </li>

                  </ul>

                </li>

                {/* ORDERS */}
                <li>

                  <Link
                    to="/AdminOrder"
                    className="nav-link text-white px-3 py-3 rounded-4"
                  >
                    <i className="bi bi-cart-check-fill me-3"></i>
                    Orders
                  </Link>

                </li>

                {/* FEEDBACK */}
                <li>

                  <Link
                    to="/feedback"
                    className="nav-link text-white px-3 py-3 rounded-4"
                  >
                    <i className="bi bi-chat-left-dots-fill me-3"></i>
                    Feedback
                  </Link>

                </li>

              </ul>

              {/* BOTTOM PROFILE */}
              <div className="mt-auto">

                <div
                  className="p-3 rounded-4"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    backdropFilter: "blur(10px)"
                  }}
                >

                  <div className="d-flex align-items-center">

                    <img
                      src="https://github.com/mdo.png"
                      alt=""
                      width="55"
                      height="55"
                      className="rounded-circle border border-3 border-light"
                    />

                    <div className="ms-3">

                      <h6 className="text-white mb-0">
                        Shiwangi
                      </h6>

                      <small className="text-light opacity-75">
                        Administrator
                      </small>

                    </div>

                  </div>

                  {/* BUTTONS */}
                  <div className="mt-4 d-grid gap-2">

                    <button
                      className="btn btn-light rounded-pill fw-semibold"
                    >
                      Profile
                    </button>

                    <button
                      className="btn btn-danger rounded-pill fw-semibold"
                      onClick={handleClick}
                    >
                      Logout
                    </button>

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* MAIN CONTENT */}
          <div
            className="col"
            style={{
              background: "#f4f7fe",
              minHeight: "100vh"
            }}
          >

            {/* TOPBAR */}
            <div
              className="d-flex justify-content-between align-items-center px-4 py-3 bg-white shadow-sm"
            >

              <div>

                <h4 className="fw-bold mb-0">
                  Welcome Back 👋
                </h4>

                <small className="text-muted">
                  Manage your website easily
                </small>

              </div>

              <div className="d-flex align-items-center gap-3">

                <button className="btn btn-light rounded-circle">
                  <i className="bi bi-bell-fill"></i>
                </button>

                <button className="btn btn-light rounded-circle">
                  <i className="bi bi-gear-fill"></i>
                </button>

              </div>

            </div>

            {/* PAGE CONTENT */}
            <div className="p-4">
              <Outlet />
            </div>

          </div>

        </div>

      </div>

    </>
  );
}