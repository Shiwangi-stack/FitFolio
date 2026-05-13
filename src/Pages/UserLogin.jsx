// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';

// const UserLogin = () => {
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch('https://fitfolio-9u7p.onrender.com/api/insertUserlogin', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       if (!res.ok) {
//         throw new Error('Login failed');
//       }

//       const data = await res.json();
//       localStorage.setItem('userInfo', JSON.stringify(data));
//       alert('Login successful!');
//       navigate('/profile');
//     } catch (err) {
//       console.error(err);
//       alert('Invalid email or password');
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           onChange={handleChange}
//           required
//           style={styles.input}
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           onChange={handleChange}
//           required
//           style={styles.input}
//         />
//         <button type="submit" style={styles.button}>Login</button>
        
//       </form>
//       <Link to="/signup">New User? Sign up</Link>
//     </div>
//   );
// };

// const styles = {
//   container: { maxWidth: '400px', margin: '50px auto', textAlign: 'center' },
//   form: { display: 'flex', flexDirection: 'column', gap: '10px' },
//   input: { padding: '10px', fontSize: '16px' },
//   button: { padding: '10px', backgroundColor: '#28a745', color: '#fff', border: 'none', cursor: 'pointer' },
// };

// export default UserLogin;

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const UserLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://fitfolio-9u7p.onrender.com/api/insertUserlogin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Login failed");

      const data = await res.json();

      localStorage.setItem("userInfo", JSON.stringify(data));
      

      alert("Login successful!");
      navigate("/profile");
    } catch (err) {
      alert("Invalid email or password");
    }
  };

  const Profile = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("userInfo");

    if (!user) {
      navigate("/login");
    }
  }, []);

  return <div>Profile Page</div>;
};

  return (
    <div
      className="container-fluid min-vh-100 d-flex align-items-center"
      style={{
        backgroundImage: "url('images/userlogin.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      {/* LOGIN BOX LEFT SIDE */}
      <div
        className=""
        style={{
          width: "420px",
        }}
      >

        <div className="bg-white p-5 rounded-4 shadow-lg">

          <h2 className="fw-bold">Welcome Back 👋</h2>
          <p className="text-muted mb-4">Login to continue</p>

          <form onSubmit={handleSubmit}>

            {/* Email */}
            <label className="fw-semibold mb-2">Email</label>
            <div className="input-group mb-3">
              <span className="input-group-text bg-white">
                <i className="bi bi-envelope-fill"></i>
              </span>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter email"
                onChange={handleChange}
                required
              />
            </div>

            {/* Password */}
            <label className="fw-semibold mb-2">Password</label>
            <div className="input-group mb-3">
              <span className="input-group-text bg-white">
                <i className="bi bi-lock-fill"></i>
              </span>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Enter password"
                onChange={handleChange}
                required
              />
            </div>

            {/* Button */}
            <button className="btn btn-primary w-100 py-2 rounded-3">
              Login
            </button>

            {/* Signup */}
            <p className="text-center mt-3 mb-0">
              New user?{" "}
              <Link to="/signup" className="text-primary">
                Sign up
              </Link>
            </p>

          </form>
        </div>

      </div>

    </div>
  );
};

export default UserLogin;