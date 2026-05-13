// // import { useState, useEffect } from "react"


// // export default function Dashboard()
// // {

// // const [counts, setcounts]=useState({ 
// //     blogCount: 0,
// //     contactCount: 0
// //     categoryCount: 0
// // })

// // useEffect(()=>{
// //     fetch("https://fitfolio-9u7p.onrender.com/api/getcount")
// //     .then(response=>response.json(

// //     ))
// //     .then(data=>setcounts(data))
// //     .catch((err)=>console.log(err)
// // )
// // },[])

// // const cards=[
// //     {label: "Feedback", count:counts.blogCount, bg: "#b99cec"},

// //     {label: "Blogs", count: counts.blogCount, bg: "#e9bad0"},

// //     {label: "Categories", count: counts.categoryCount, bg: "#f8d5a3"},
// // ];
// //     return(
// //         <>
// //         <div className="container">
// //             <h1>Welcome to Dashboard</h1>
// //             <div className="row mt-4">
// //                 {cards.map((item)=>
// //                 <div className="col-lg-4">
// //                     <div className="card text-white text-center" style={{'background':item.bg}}>
// //                         <div className="card-body">
// //                             <h1>{item.count}</h1>
// //                             <hr />
// //                             <h3><i className={item.icon}></i>{item.label}</h3>
// //                         </div>
// //                     </div>
// //                 </div>
// //                 )}
// //             </div>
// //             <div className="row">
// //                 <div className="col-lg-4">
// //                     <h3>Transaction History</h3>
// //                 </div>
// //                 <div className="col-lg-8 d-flex p-0">
// //                     <div className="col-lg-7">
// //                         <h3>Open Projects</h3>
// //                         <p>Admin Dashboard</p>
// //                         <p>Broadcast web app mockup</p>
// //                         <hr />
// //                         <p>Admin Dashboard</p>
// //                         <p>Broadcast web app mockup</p>
// //                         <hr />
// //                         <p>Admin Dashboard</p>
// //                         <p>Broadcast web app mockup</p>
// //                         <hr />
// //                         <p>Admin Dashboard</p>
// //                         <p>Broadcast web app mockup</p>
// //                         <hr />
// //                         <p>Admin Dashboard</p>
// //                         <p>Broadcast web app mockup</p>
// //                         <hr />
// //                     </div>
// //                     <div className="col-lg-5 text-mute">
// //                         <h3>Your data status</h3>
// //                         <p>15 minutes ago</p>
// //                         <p>30 tasks, 5 issues</p>
// //                         <hr />
// //                         <p>15 minutes ago</p>
// //                         <p>30 tasks, 5 issues</p>
// //                         <hr />
// //                         <p>15 minutes ago</p>
// //                         <p>30 tasks, 5 issues</p>
// //                         <hr />
// //                         <p>15 minutes ago</p>
// //                         <p>30 tasks, 5 issues</p>
// //                         <hr />
// //                         <p>15 minutes ago</p>
// //                         <p>30 tasks, 5 issues</p>
// //                         <hr />
// //                     </div>
// //                 </div>
                
// //             </div>
// //         </div>
        
// //         </>
// //     )
// // }


// import { useState, useEffect } from "react";

// export default function Dashboard() {

//   const [counts, setCounts] = useState({ 
//     blogCount: 0,
//     contactCount: 0,
//     categoryCount: 0,
//     orderCount: 0,
//     productCount: 0
//   });

//   useEffect(() => {
//     fetch("https://fitfolio-9u7p.onrender.com/api/getcount")
//       .then(res => res.json())
//       .then(data => setCounts(data))
//       .catch(err => console.log(err));
//   }, []);

//   const cards = [
//     {
//       label: "Feedback",
//       count: counts.contactCount,
//       bg: "#b99cec",
//       icon: "bi bi-chat-dots-fill"
//     },
//     {
//       label: "Blogs",
//       count: counts.blogCount,
//       bg: "#e9bad0",
//       icon: "bi bi-journal-text"
//     },
//     {
//       label: "Categories",
//       count: counts.categoryCount,
//       bg: "#f8d5a3",
//       icon: "bi bi-tags-fill"
//     },
//     {
//       label: "Orders",
//       count: counts.orderCount,
//       bg: "#a8dadc",
//       icon: "bi bi-cart-check-fill"
//     },
//     {
//       label: "Products",
//       count: counts.productCount,
//       bg: "#f8d5a3",
//       icon: "bi bi-box-seam-fill"
//     }
//   ];

//   return (
//     <div className="container">
//       <h1>Welcome to Dashboard</h1>

//       {/* CARDS */}
//       <div className="row mt-4">
//         {cards.map((item, index) => (
//           <div className="col-lg-4" key={index}>
//             <div
//               className="card text-white text-center shadow"
//               style={{ background: item.bg, borderRadius: "12px" }}
//             >
//               <div className="card-body">
//                 <h1>{item.count}</h1>
//                 <hr />
//                 <h3>
//                   <i className={`${item.icon} me-2`}></i>
//                   {item.label}
//                 </h3>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* OTHER SECTION (UNCHANGED) */}
//       <div className="row mt-5">
//         <div className="col-lg-4">
//           <h3>Transaction History</h3>
//         </div>

//         <div className="col-lg-8 d-flex p-0">
//           <div className="col-lg-7">
//             <h3>Open Projects</h3>
//             <p>Admin Dashboard</p>
//             <p>Broadcast web app mockup</p>
//             <hr />
//             <p>Admin Dashboard</p>
//             <p>Broadcast web app mockup</p>
//           </div>

//           <div className="col-lg-5 text-muted">
//             <h3>Your data status</h3>
//             <p>15 minutes ago</p>
//             <p>30 tasks, 5 issues</p>
//             <hr />
//             <p>15 minutes ago</p>
//             <p>30 tasks, 5 issues</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";

export default function Dashboard() {

  const [counts, setCounts] = useState({
    blogCount: 0,
    contactCount: 0,
    categoryCount: 0,
    orderCount: 0,
    productCount: 0
  });

  useEffect(() => {
    fetch("https://fitfolio-9u7p.onrender.com/api/getcount")
      .then(res => res.json())
      .then(data => setCounts(data))
      .catch(err => console.log(err));
  }, []);

  const cards = [
    {
      label: "Feedback",
      count: counts.contactCount,
      bg: "linear-gradient(135deg, #6a11cb, #2575fc)",
      icon: "bi bi-chat-dots-fill"
    },
    {
      label: "Blogs",
      count: counts.blogCount,
      bg: "linear-gradient(135deg, #ff6a88, #ff99ac)",
      icon: "bi bi-journal-text"
    },
    {
      label: "Categories",
      count: counts.categoryCount,
      bg: "linear-gradient(135deg, #f7971e, #ffd200)",
      icon: "bi bi-tags-fill"
    },
    {
      label: "Orders",
      count: counts.orderCount,
      bg: "linear-gradient(135deg, #11998e, #38ef7d)",
      icon: "bi bi-cart-check-fill"
    },
    {
      label: "Products",
      count: counts.productCount,
      bg: "linear-gradient(135deg, #fc466b, #3f5efb)",
      icon: "bi bi-box-seam-fill"
    }
  ];

  return (
    <div
      className="container-fluid py-4 px-4"
      style={{
        background: "#f4f7fe",
        minHeight: "100vh"
      }}
    >

      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-1">Admin Dashboard</h2>
          <p className="text-muted">
            Welcome back 👋 Here’s your website overview
          </p>
        </div>

        <div className="bg-white px-4 py-2 shadow-sm rounded-4">
          <h6 className="mb-0 text-muted">Today</h6>
          <h5 className="fw-bold">11 May 2026</h5>
        </div>
      </div>

      {/* DASHBOARD CARDS */}
      <div className="row g-4">

        {cards.map((item, index) => (
          <div className="col-lg-4 col-md-6" key={index}>

            <div
              className="card border-0 shadow-lg text-white h-100"
              style={{
                background: item.bg,
                borderRadius: "22px",
                overflow: "hidden",
                transition: "0.3s"
              }}
            >

              <div className="card-body position-relative p-4">

                {/* ICON */}
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "20px",
                    background: "rgba(255,255,255,0.2)",
                    fontSize: "30px"
                  }}
                >
                  <i className={item.icon}></i>
                </div>

                {/* COUNT */}
                <div className="mt-4">
                  <h1
                    className="fw-bold"
                    style={{
                      fontSize: "48px"
                    }}
                  >
                    {item.count}
                  </h1>

                  <p
                    className="mb-0 fw-semibold"
                    style={{
                      fontSize: "20px",
                      letterSpacing: "1px"
                    }}
                  >
                    {item.label}
                  </p>
                </div>

                {/* CIRCLE DESIGN */}
                <div
                  style={{
                    position: "absolute",
                    width: "140px",
                    height: "140px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.12)",
                    top: "-40px",
                    right: "-40px"
                  }}
                ></div>

              </div>
            </div>

          </div>
        ))}

      </div>

      {/* LOWER SECTION */}
      <div className="row mt-5 g-4">

        {/* TRANSACTION */}
        <div className="col-lg-4">

          <div
            className="card border-0 shadow-sm"
            style={{
              borderRadius: "20px"
            }}
          >
            <div className="card-body p-4">

              <h4 className="fw-bold mb-4">
                Transaction History
              </h4>

              <div className="d-flex justify-content-between mb-3">
                <div>
                  <h6 className="mb-0">Order Payment</h6>
                  <small className="text-muted">
                    2 minutes ago
                  </small>
                </div>

                <h6 className="text-success fw-bold">
                  + ₹2,500
                </h6>
              </div>

              <hr />

              <div className="d-flex justify-content-between mb-3">
                <div>
                  <h6 className="mb-0">New Product</h6>
                  <small className="text-muted">
                    1 hour ago
                  </small>
                </div>

                <h6 className="text-primary fw-bold">
                  Added
                </h6>
              </div>

              <hr />

              <div className="d-flex justify-content-between">
                <div>
                  <h6 className="mb-0">Blog Updated</h6>
                  <small className="text-muted">
                    Yesterday
                  </small>
                </div>

                <h6 className="text-warning fw-bold">
                  Updated
                </h6>
              </div>

            </div>
          </div>

        </div>

        {/* OPEN PROJECTS */}
        <div className="col-lg-8">

          <div
            className="card border-0 shadow-sm"
            style={{
              borderRadius: "20px"
            }}
          >
            <div className="card-body p-4">

              <div className="d-flex justify-content-between align-items-center mb-4">
                <h4 className="fw-bold">
                  Open Projects
                </h4>

                <button className="btn btn-dark rounded-pill px-4">
                  View All
                </button>
              </div>

              {/* PROJECT ITEM */}
              {[1, 2, 3, 4].map((item) => (

                <div
                  key={item}
                  className="d-flex justify-content-between align-items-center mb-4"
                >

                  <div className="d-flex align-items-center">

                    <div
                      className="me-3"
                      style={{
                        width: "55px",
                        height: "55px",
                        borderRadius: "16px",
                        background:
                          "linear-gradient(135deg,#667eea,#764ba2)"
                      }}
                    ></div>

                    <div>
                      <h6 className="fw-bold mb-1">
                        Admin Dashboard
                      </h6>

                      <small className="text-muted">
                        Broadcast web app mockup
                      </small>
                    </div>

                  </div>

                  <div>
                    <span className="badge bg-success p-2">
                      Active
                    </span>
                  </div>

                </div>

              ))}

            </div>
          </div>

        </div>

      </div>

    </div>
  );
}