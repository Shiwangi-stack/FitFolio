// import React,{useState} from 'react';



// import  { Link, useNavigate } from 'react-router-dom';

// const Signup=()=>{
//     const[formData,setFormData]=useState({ name: '', email: '', password: '' });
//     const navigate=useNavigate();
//      const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };
     

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch('http://localhost:5000/api/insertSignup', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });
  
//       if (!res.ok) {
//         throw new Error('Signup failed');
//       }
  
//       const data = await res.json();
//       localStorage.setItem('userInfo', JSON.stringify(data));
//       alert('Signup successful!');
//       navigate('/'); // after signup, redirect home or dashboard
//     } catch (err) {
//       console.error(err);
//       alert('Signup failed!');
//     }
//   };
  
//   return (
//     <div style={styles.container}>
//       <h2>Signup</h2>
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <input type="text" name="name" placeholder="Name" onChange={handleChange} required style={styles.input} />
//         <input type="email" name="email" placeholder="Email" onChange={handleChange} required style={styles.input} />
//         <input type="password" name="password" placeholder="Password" onChange={handleChange} required style={styles.input} />
//         <button type="submit" style={styles.button}>Signup</button>
//       </form>
//       <p>Existing User? <Link to="/UserLogin">Login</Link></p>
//     </div>
//   );
// };

// const styles = {
//   container: { maxWidth: '400px', margin: '50px auto', textAlign: 'center' },
//   form: { display: 'flex', flexDirection: 'column', gap: '10px' },
//   input: { padding: '10px', fontSize: '16px' },
//   button: { padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }
// };

// export default Signup;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/insertSignup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Signup failed");

      const data = await res.json();
      localStorage.setItem("userInfo", JSON.stringify(data));

      alert("Signup successful!");
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("Signup failed!");
    }
  };

  return (

    
    <div style={styles.wrapper} >
      <div style={styles.card}>
        <h2 style={styles.title}>Create Account</h2>
        <p style={styles.subtitle}>Join us and start your journey</p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
            style={styles.input}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            required
            style={styles.input}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
            style={styles.input}
          />

          <button type="submit" style={styles.button}>
            Signup
          </button>
        </form>

        <p style={styles.footer}>
          Existing User?{" "}
          <Link to="/UserLogin" style={styles.link}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",

    // 🔥 Background Image
    backgroundImage:
      "url('images/si.avif')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
  },

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    background: "rgba(0,0,0,0.65)", // dark overlay
    zIndex: 1,
  },

  card: {
    position: "relative",
    zIndex: 2,
    width: "380px",
    padding: "35px",
    borderRadius: "16px",
    backdropFilter: "blur(120px)",
    background: "rgba(170, 118, 118, 0.08)",
    border: "1px solid rgba(255,255,255,0.15)",
    boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
    color: "#fff",
    textAlign: "center",
  },

  title: {
    fontSize: "26px",
    fontWeight: "bold",
    marginBottom: "5px",
  },

  subtitle: {
    fontSize: "14px",
    color: "#000000",
    marginBottom: "20px",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  input: {
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid rgb(8, 1, 1)",
    background: "rgba(1, 1, 1, 0.05)",
    color: "#010101d8",
    outline: "none",
    fontSize: "14px",
  },

  button: {
    padding: "12px",
    marginTop: "10px",
    borderRadius: "10px",
    border: "none",
    background: "linear-gradient(90deg, #6366f1, #3b82f6)",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
  },

  footer: {
    marginTop: "15px",
    fontSize: "13px",
    color: "#cbd5e1",
  },

  link: {
    color: "#60a5fa",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default Signup;