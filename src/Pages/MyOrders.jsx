// import { useEffect, useState } from 'react';
// import { useParams, Link } from 'react-router-dom';

// const MyOrders = () => {
//   const [orders, setOrders] = useState([]);
//   const { id } = useParams();

//   useEffect(() => {
//     const fetchOrders = async () => {
//       const res = await fetch(`https://fitfolio-9u7p.onrender.com/api/myorders/${id}`);
//       const data = await res.json();
//       setOrders(data);
//     };
//     fetchOrders();
//   }, [id]);

//   return (
//     <div style={{ padding: '20px' }}>
//       <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>🛒 My Orders</h2>
//       {orders.length === 0 ? (
//         <p style={{ textAlign: 'center' }}>No orders found.</p>
//       ) : (
//         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
//           {orders.map(order => (
//             <div key={order._id} style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '10px', background: '#fafafa', boxShadow: '0px 2px 5px rgba(0,0,0,0.1)' }}>
//               <h4>Order ID: {order._id.substring(0, 8)}...</h4>
//               <p><strong>Total Amount:</strong> ₹{order.totalAmount}</p>
//               <p><strong>Status:</strong> {order.paymentStatus}</p>
//               <p><strong>Ordered At:</strong> {new Date(order.createdAt).toLocaleString()}</p>
//               <Link to={`/OrderDetails/${order._id}`} style={{ textDecoration: 'none', color: 'white' }}>
//                 <button style={{ marginTop: '10px', backgroundColor: '#007bff', color: 'white', padding: '8px 12px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
//                   View Details
//                 </button>
//               </Link>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyOrders;

import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchOrders = async () => {
      const res = await fetch(`https://fitfolio-9u7p.onrender.com/api/myorders/${id}`);
      const data = await res.json();
      setOrders(data);
    };
    fetchOrders();
  }, [id]);

  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4 text-center">My Orders</h2>

      {orders.length === 0 ? (
        <div className="text-center mt-5">
          <h5>No orders yet 😕</h5>
          <p className="text-muted">Start shopping to see your orders here.</p>
        </div>
      ) : (
        <div className="d-flex flex-column gap-3">

          {orders.map(order => (
            <div key={order._id} className="order-card">

              {/* LEFT */}
              <div className="order-left">
                <h6 className="mb-1">
                  Order #{order._id.substring(0, 8)}
                </h6>

                <small className="text-muted">
                  {new Date(order.createdAt).toLocaleString()}
                </small>
              </div>

              {/* CENTER */}
              <div className="order-center">
                <p className="mb-1">
                  <strong>Amount:</strong> ₹{order.totalAmount}
                </p>

                <span className={`status-badge ${
                  order.paymentStatus === 'Paid' ? 'paid' : 'pending'
                }`}>
                  {order.paymentStatus}
                </span>
              </div>

              {/* RIGHT */}
              <div className="order-right">
                <Link to={`/OrderDetails/${order._id}`}>
                  <button className="view-btn">
                    View Details →
                  </button>
                </Link>
              </div>

            </div>
          ))}

        </div>
      )}

      {/* PREMIUM STYLES */}
      <style>{`
        .order-card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 20px;
          border-radius: 14px;
          background: #fff;
          box-shadow: 0 4px 12px rgba(0,0,0,0.06);
          transition: 0.3s;
          border: 1px solid #eee;
        }

        .order-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.08);
        }

        .order-left {
          flex: 1;
        }

        .order-center {
          flex: 1;
          text-align: center;
        }

        .order-right {
          flex: 1;
          text-align: right;
        }

        .status-badge {
          padding: 5px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
        }

        .paid {
          background: #dcfce7;
          color: #166534;
        }

        .pending {
          background: #fee2e2;
          color: #991b1b;
        }

        .view-btn {
          background: #111827;
          color: white;
          border: none;
          padding: 8px 14px;
          border-radius: 8px;
          font-weight: 500;
          transition: 0.3s;
        }

        .view-btn:hover {
          background: #000;
        }

        @media (max-width: 768px) {
          .order-card {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }

          .order-center,
          .order-right {
            text-align: left;
          }
        }
      `}</style>
    </div>
  );
};

export default MyOrders;