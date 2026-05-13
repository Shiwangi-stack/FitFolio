// import { useState, useContext } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { CartContext } from './CartContext';

// const Checkout = () => {
//   const { userId } = useParams();
//   const { cartItems, clearCart } = useContext(CartContext);
//   const navigate = useNavigate();
  
//   const [address, setAddress] = useState({
//     name: '',
//     street: '',
//     city: '',
//     postalCode: '',
//     country: '',
//     phone : ''
//   });

//   const handleChange = (e) => {
//     setAddress({ ...address, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const totalAmount = cartItems.reduce((acc, item) => acc + (item.sellingprice * item.quantity), 0);
//     const items = cartItems.map(item => ({
//       productId: item._id,
//       quantity: item.quantity
//     }));

//     console.log(JSON.stringify({ userId, items, shippingAddress: address, totalAmount }))
//     // Step 1: Create Order
//   const orderRes = await fetch('https://fitfolio-9u7p.onrender.com/api/placeorder', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ userId, items, shippingAddress: address, totalAmount })
//   });

//   const orderData = await orderRes.json();
//   if (orderRes.ok) {
//     // Step 2: Open Razorpay Payment Window
//     const options = {
//       key: 'rzp_test_99IwqPHWTFKkXS', // 🔥 Replace with your real Razorpay key
//       amount: totalAmount * 100, // Amount in paise
//       currency: "INR",
//       name: "ASHION",
//       description: "Order Payment ASHION",
//       handler: async function (response) {
//         // Payment successful

//         // Step 3: Update backend with payment success
//         const sellingpriceRes = await fetch(`https://fitfolio-9u7p.onrender.com/api/updatepayment/${orderData._id}`, {
//           method: 'PUT',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({
//             paymentId: response.razorpay_payment_id,
//             paymentStatus: 'Paid'
//           })
//         });

//         if (sellingpriceRes.ok) {
//           alert('Payment Successful!');
//           clearCart();
//           navigate('/'); // or Thank You page
//         } else {
//           alert('Payment captured but failed to update order.');
//         }
//       },
//       prefill: {
//         name: address.name,
//         email: 'user@example.com', // optional
//         contact: address.phone // optional
//       },
//       theme: {
//         color: "#3399cc"
//       }
//     };
    
//     const rzp = new window.Razorpay(options);
//     rzp.open();
//   } else {
//     alert('Failed to create order. Try again.');
//   }
// };


//   return (
//     <div className="container mt-5">
//       <h2 className="mb-4">Checkout</h2>
//       <form className="row g-3" onSubmit={handleSubmit}>
//         <div className="col-md-6">
//           <label htmlFor="name" className="form-label">Full Name</label>
//           <input type="text" className="form-control" id="name" name="name" onChange={handleChange} required />
//         </div>

//        <div className="col-md-6">
//           <label htmlFor="name" className="form-label">phone no</label>
//           <input type="text" className="form-control" id="name" name="phone" onChange={handleChange} required />
//         </div>

        
//         <div className="col-12">
//           <label htmlFor="street" className="form-label">Street Address</label>
//           <input type="text" className="form-control" id="street" name="street" onChange={handleChange} required />
//         </div>
        
//         <div className="col-md-6">
//           <label htmlFor="city" className="form-label">City</label>
//           <input type="text" className="form-control" id="city" name="city" onChange={handleChange} required />
//         </div>
        
//         <div className="col-md-4">
//           <label htmlFor="postalCode" className="form-label">Postal Code</label>
//           <input type="text" className="form-control" id="postalCode" name="postalCode" onChange={handleChange} required />
//         </div>
        
//         <div className="col-md-2">
//           <label htmlFor="country" className="form-label">Country</label>
//           <input type="text" className="form-control" id="country" name="country" onChange={handleChange} required />
//         </div>

//         <div className="col-12">
//           <button type="submit" className="btn btn-primary w-100">Submit Order</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Checkout;


import { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext';

const Checkout = () => {
  const { userId } = useParams();
  const { cartItems, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [address, setAddress] = useState({
    name: '',
    street: '',
    city: '',
    postalCode: '',
    country: '',
    phone: ''
  });

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.sellingprice * item.quantity,
    0
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const items = cartItems.map(item => ({
      productId: item._id,
      quantity: item.quantity
    }));

    try {
      const orderRes = await fetch('https://fitfolio-9u7p.onrender.com/api/placeorder', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, items, shippingAddress: address, totalAmount })
      });

      const orderData = await orderRes.json();

      if (!orderRes.ok) throw new Error("Order failed");

      const options = {
        key: 'rzp_test_99IwqPHWTFKkXS',
        amount: totalAmount * 100,
        currency: "INR",
        name: "ASHION",
        description: "Secure Payment",
        image: "https://cdn-icons-png.flaticon.com/512/891/891462.png",

        handler: async function (response) {
          const res = await fetch(
            `https://fitfolio-9u7p.onrender.com/api/updatepayment/${orderData._id}`,
            {
              method: 'PUT',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                paymentId: response.razorpay_payment_id,
                paymentStatus: 'Paid'
              })
            }
          );

          if (res.ok) {
            clearCart();
            navigate('/success');
          } else {
            alert('Payment done but update failed');
          }
        },

        prefill: {
          name: address.name,
          contact: address.phone
        },

        theme: {
          color: "#111827"
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();

    } catch (err) {
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">
      <div className="row g-4">

        {/* LEFT: FORM */}
        <div className="col-lg-7">
          <div className="card shadow-lg border-0 p-4 rounded-4">
            <h3 className="mb-4 fw-bold">Checkout</h3>

            <form className="row g-3" onSubmit={handleSubmit}>

              <div className="col-md-6">
                <input type="text" name="name" placeholder="Full Name"
                  className="form-control premium-input"
                  onChange={handleChange} required />
              </div>

              <div className="col-md-6">
                <input type="text" name="phone" placeholder="Phone Number"
                  className="form-control premium-input"
                  onChange={handleChange} required />
              </div>

              <div className="col-12">
                <input type="text" name="street" placeholder="Street Address"
                  className="form-control premium-input"
                  onChange={handleChange} required />
              </div>

              <div className="col-md-6">
                <input type="text" name="city" placeholder="City"
                  className="form-control premium-input"
                  onChange={handleChange} required />
              </div>

              <div className="col-md-3">
                <input type="text" name="postalCode" placeholder="Postal Code"
                  className="form-control premium-input"
                  onChange={handleChange} required />
              </div>

              <div className="col-md-3">
                <input type="text" name="country" placeholder="Country"
                  className="form-control premium-input"
                  onChange={handleChange} required />
              </div>

              <div className="col-12 mt-3">
                <button
                  type="submit"
                  className="btn premium-btn w-100"
                  disabled={loading}
                >
                  {loading ? "Processing..." : `Pay ₹${totalAmount}`}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* RIGHT: ORDER SUMMARY */}
        <div className="col-lg-5">
          <div className="card shadow-lg border-0 p-4 rounded-4">
            <h4 className="fw-bold mb-3">Order Summary</h4>

            {cartItems.map(item => (
              <div key={item._id} className="d-flex justify-content-between mb-2">
                <span>{item._title} × {item.quantity}</span>
                <span>₹{item.sellingprice * item.quantity}</span>
              </div>
            ))}

            <hr />

            <div className="d-flex justify-content-between fw-bold fs-5">
              <span>Total</span>
              <span>₹{totalAmount}</span>
            </div>
          </div>
        </div>

      </div>

      {/* STYLE */}
      <style>{`
        .premium-input {
          padding: 12px;
          border-radius: 12px;
          border: 1px solid #e5e7eb;
          transition: 0.3s;
        }

        .premium-input:focus {
          border-color: #111827;
          box-shadow: 0 0 0 2px rgba(0,0,0,0.05);
        }

        .premium-btn {
          background: #111827;
          color: #fff;
          padding: 12px;
          border-radius: 12px;
          font-weight: 600;
          transition: 0.3s;
        }

        .premium-btn:hover {
          background: #000;
        }
      `}</style>
    </div>
  );
};

export default Checkout;