import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const OrderDetails = () => {
  const { orderid } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      const res = await fetch(`https://fitfolio-9u7p.onrender.com/api/orderdetails/${orderid}`);
      const data = await res.json();
      setOrder(data);
    };
    fetchOrder();
  }, [orderid]);

  if (!order) return <div>Loading...</div>;

  return (
    <div style={styles.container}>
      <button style={styles.backButton} onClick={() => navigate(-1)}>
        ← Back to Orders
      </button>

      <h2 style={styles.heading}>Order Summary</h2>

      <div style={styles.orderInfo}>
        <p><strong>Order ID:</strong> {order._id}</p>
        <p><strong>Status:</strong> {order.status}</p>
        <p><strong>Payment Status:</strong> {order.paymentStatus || 'Pending'}</p>
        <p><strong>Ordered At:</strong> {new Date(order.createdAt).toLocaleString()}</p>
      </div>

      <h3 style={styles.subHeading}>Items:</h3>

      <div style={styles.itemsContainer}>
        {order.items.map((item, index) => (
          <div key={index} style={styles.itemCard}>
            <h4>{item.productId?.title}</h4>
            <p>Price: ₹{item.productId?.sellingprice}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Subtotal: ₹{item.productId?.sellingprice * item.quantity}</p>
          </div>
        ))}
      </div>

      <div style={styles.total}>
        <h3>Total Amount: ₹{order.totalAmount}</h3>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '30px',
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  backButton: {
    marginBottom: '20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
  },
  orderInfo: {
    marginBottom: '20px',
    backgroundColor: '#fff',
    padding: '15px',
    borderRadius: '8px',
  },
  subHeading: {
    marginTop: '30px',
    marginBottom: '10px',
  },
  itemsContainer: {
    display: 'grid',
    gap: '15px',
  },
  itemCard: {
    backgroundColor: '#fff',
    padding: '15px',
    borderRadius: '8px',
    border: '1px solid #ddd',
  },
  total: {
    marginTop: '30px',
    textAlign: 'right',
    fontSize: '20px',
    fontWeight: 'bold',
  },
};

export default OrderDetails;
