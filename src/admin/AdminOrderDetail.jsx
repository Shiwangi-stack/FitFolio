import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const AdminOrderDetail = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/adminorderdetails/${orderId}`);
        const data = await res.json();
        setOrder(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching order details:", error);
        setLoading(false);
      }
    };

    fetchOrderDetails();
  }, [orderId]);

  const updateOrderStatus = async (status) => {
    try {
      const res = await fetch(`http://localhost:5000/api/updateorderstatus/${orderId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });

      if (res.ok) {
        navigate('/AdminOrder'); // Redirect back to orders list after updating
        alert('Order status updated successfully!');
      } else {
        alert('Failed to update order status');
      }
    } catch (error) {
      console.error('Error updating order status:', error);
      alert('Error updating order status');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!order) {
    return <div>No order details found.</div>;
  }


  return (
    <div style={styles.container}>
      <h2>Order Details</h2>
      <button style={styles.backButton} onClick={() => navigate('/AdminOrder')}>
        Back to Orders
      </button>
      <div style={styles.orderInfo}>
        <h3>Order ID: {order._id}</h3>
        <p><strong>User:</strong> {order.userId?.name} ({order.userId?.email})</p>
        <p><strong>Total Amount:</strong> ₹{order.totalAmount}</p>
        <p><strong>Payment Status:</strong> {order.paymentStatus || 'Pending'}</p>
        <div>
  <h3>Shipping Address</h3>
  <p><strong>Name:</strong> {order.shippingAddress.name}</p>
  <p><strong>Street:</strong> {order.shippingAddress.street}</p>
  <p><strong>City:</strong> {order.shippingAddress.city}</p>
  <p><strong>Postal Code:</strong> {order.shippingAddress.postalCode}</p>
  <p><strong>Country:</strong> {order.shippingAddress.country}</p>
</div>
        <p><strong>Order Date:</strong> {new Date(order.createdAt).toLocaleString()}</p>

        <h4>Order Items</h4>
        <table style={styles.table}>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {order.items.map((item) => (
              <tr key={item.productId}>
                <td>{item.productId?.title}</td>
                <td>₹{item.productId?.sellingprice}</td>
                <td>{item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={styles.actions}>
          <button
            style={styles.actionButton}
            onClick={() => updateOrderStatus('Delivered')}
          >
            Mark as Delivered
          </button>
          <button
            style={{ ...styles.actionButton, backgroundColor: '#f44336' }}
            onClick={() => updateOrderStatus('Cancelled')}
          >
            Cancel Order
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '30px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  backButton: {
    padding: '10px 20px',
    backgroundColor: '#1976D2',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginBottom: '20px',
  },
  orderInfo: {
    marginBottom: '20px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '20px',
  },
  actions: {
    marginTop: '20px',
  },
  actionButton: {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginRight: '10px',
  },
};

export default AdminOrderDetail;