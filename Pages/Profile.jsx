// import React from 'react';

// const Profile = () => {
//   const user = JSON.parse(localStorage.getItem('userInfo'));

//   if (!user) {
//     return <h2>Please login first</h2>;
//   }

  

//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h2>User Profile</h2>
//       <p><strong>Name:</strong> {user.name}</p>
//       <p><strong>Email:</strong> {user.email}</p>
//     </div>
//   );
// };

// export default Profile;

// import React from "react";

// const Profile = () => {
//   const user = JSON.parse(localStorage.getItem("userInfo"));

//   if (!user) {
//     return (
//       <div className="d-flex justify-content-center align-items-center" style={{ height: "80vh" }}>
//         <div className="text-center">
//           <h3 className="text-danger">Please login first</h3>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div
//       className="d-flex justify-content-center align-items-center"
//       style={{
//         minHeight: "90vh",
//         background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)"
//       }}
//     >
//       <div
//         className="card shadow-lg border-0"
//         style={{
//           width: "420px",
//           borderRadius: "20px",
//           overflow: "hidden"
//         }}
//       >
//         {/* Header */}
//         <div
//           style={{
//             background: "linear-gradient(135deg, #4facfe, #00f2fe)",
//             padding: "30px",
//             textAlign: "center",
//             color: "white"
//           }}
//         >
//           <div
//             style={{
//               width: "80px",
//               height: "80px",
//               borderRadius: "50%",
//               background: "white",
//               color: "#4facfe",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               fontSize: "30px",
//               fontWeight: "bold",
//               margin: "0 auto"
//             }}
//           >
//             {user.name?.charAt(0).toUpperCase()}
//           </div>

//           <h4 className="mt-3 mb-0">{user.name}</h4>
//           <small>{user.email}</small>
//         </div>

//         {/* Body */}
//         <div className="p-4">
//           <div className="mb-3">
//             <label className="text-muted">Full Name</label>
//             <div className="fw-bold">{user.name}</div>
//           </div>

//           <div className="mb-3">
//             <label className="text-muted">Email Address</label>
//             <div className="fw-bold">{user.email}</div>
//           </div>

//           {user.phone && (
//             <div className="mb-3">
//               <label className="text-muted">Phone</label>
//               <div className="fw-bold">{user.phone}</div>
//             </div>
//           )}

//           <div className="mt-4 text-center">
//             <button className="btn btn-primary px-4 rounded-pill">
//               Edit Profile
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

import React from "react";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("userInfo"));

  if (!user) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          minHeight: "100vh",
          background: "#f5f5f5",
        }}
      >
        <div className="card p-5 shadow border-0 rounded-4 text-center">
          <h2 className="text-danger fw-bold">Please Login First</h2>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to right, #f8fafc, #eef2ff, #f1f5f9)",
        padding: "40px 15px",
      }}
    >
      <div className="container">

        {/* TOP PROFILE CARD */}
        <div
          className="card border-0 shadow-lg mb-4"
          style={{
            borderRadius: "25px",
            overflow: "hidden",
          }}
        >
          {/* COVER */}
          <div
            style={{
              height: "180px",
              background:
                "linear-gradient(135deg, #667eea, #764ba2)",
              position: "relative",
            }}
          >
            {/* PROFILE IMAGE */}
            <div
              style={{
                position: "absolute",
                bottom: "-50px",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <div
                className="shadow-lg"
                style={{
                  width: "110px",
                  height: "110px",
                  borderRadius: "50%",
                  background: "white",
                  border: "5px solid white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "42px",
                  fontWeight: "bold",
                  color: "#667eea",
                }}
              >
                {user.name?.charAt(0).toUpperCase()}
              </div>
            </div>
          </div>

          {/* PROFILE INFO */}
          <div className="card-body text-center pt-5 mt-4">
            <h2 className="fw-bold">{user.name}</h2>
            <p className="text-muted">{user.email}</p>

            {user.phone && (
              <p className="text-muted">
                <i className="bi bi-telephone-fill me-2"></i>
                {user.phone}
              </p>
            )}

            <button className="btn btn-dark rounded-pill px-4 mt-2">
              Edit Profile
            </button>
          </div>
        </div>

        {/* DASHBOARD CARDS */}
        <div className="row g-4">

          {/* Orders */}
          <div className="col-lg-4">
            <div
              className="card border-0 shadow-sm h-100"
              style={{
                borderRadius: "20px",
                transition: "0.3s",
              }}
            >
              <div className="card-body text-center p-4">
                <div
                  className="mb-3"
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    background: "#eef2ff",
                    margin: "auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <i
                    className="bi bi-bag-check-fill"
                    style={{
                      fontSize: "28px",
                      color: "#667eea",
                    }}
                  ></i>
                </div>

                <h5 className="fw-bold">My Orders</h5>
                <p className="text-muted">
                  Track, return or buy things again
                </p>

                <button className="btn btn-outline-dark rounded-pill px-4">
                  View Orders
                </button>
              </div>
            </div>
          </div>

          {/* Wishlist */}
          <div className="col-lg-4">
            <div
              className="card border-0 shadow-sm h-100"
              style={{
                borderRadius: "20px",
              }}
            >
              <div className="card-body text-center p-4">
                <div
                  className="mb-3"
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    background: "#fff1f2",
                    margin: "auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <i
                    className="bi bi-heart-fill"
                    style={{
                      fontSize: "28px",
                      color: "#e11d48",
                    }}
                  ></i>
                </div>

                <h5 className="fw-bold">Wishlist</h5>
                <p className="text-muted">
                  Your saved favourite products
                </p>

                <button className="btn btn-outline-danger rounded-pill px-4">
                  Open Wishlist
                </button>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="col-lg-4">
            <div
              className="card border-0 shadow-sm h-100"
              style={{
                borderRadius: "20px",
              }}
            >
              <div className="card-body text-center p-4">
                <div
                  className="mb-3"
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    background: "#ecfdf5",
                    margin: "auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <i
                    className="bi bi-geo-alt-fill"
                    style={{
                      fontSize: "28px",
                      color: "#10b981",
                    }}
                  ></i>
                </div>

                <h5 className="fw-bold">Saved Address</h5>
                <p className="text-muted">
                  Manage your delivery addresses
                </p>

                <button className="btn btn-outline-success rounded-pill px-4">
                  Manage Address
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ACCOUNT SETTINGS */}
        <div
          className="card border-0 shadow-lg mt-5"
          style={{
            borderRadius: "25px",
          }}
        >
          <div className="card-body p-4">

            <h4 className="fw-bold mb-4">Account Settings</h4>

            <div className="list-group">

              <button className="list-group-item list-group-item-action d-flex justify-content-between align-items-center py-3">
                Change Password
                <i className="bi bi-chevron-right"></i>
              </button>

              <button className="list-group-item list-group-item-action d-flex justify-content-between align-items-center py-3">
                Payment Methods
                <i className="bi bi-chevron-right"></i>
              </button>

              <button className="list-group-item list-group-item-action d-flex justify-content-between align-items-center py-3">
                Notifications
                <i className="bi bi-chevron-right"></i>
              </button>

              <button className="list-group-item list-group-item-action d-flex justify-content-between align-items-center py-3 text-danger">
                Logout
                <i className="bi bi-box-arrow-right"></i>
              </button>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;