import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AdminOrder = () => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [searchEmail, setSearchEmail] = useState('');
  const [paymentFilter, setPaymentFilter] = useState('All');

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    const res = await fetch('https://fitfolio-9u7p.onrender.com/api/allorders');
    const data = await res.json();
    setOrders(data);
    setFilteredOrders(data);
  };

  const handleSearch = (e) => {
    setSearchEmail(e.target.value);
    filterOrders(e.target.value, paymentFilter);
  };

  const handlePaymentFilter = (e) => {
    setPaymentFilter(e.target.value);
    filterOrders(searchEmail, e.target.value);
  };

  const filterOrders = (email, paymentStatus) => {
    let tempOrders = [...orders];

    if (email) {
      tempOrders = tempOrders.filter((order) =>
        order.userId?.email?.toLowerCase().includes(email.toLowerCase())
      );
    }

    if (paymentStatus !== 'All') {
      tempOrders = tempOrders.filter((order) =>
        (order.paymentStatus || 'Pending') === paymentStatus
      );
    }

    setFilteredOrders(tempOrders);
  };

  
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>All Orders (Admin View)</h2>

      {/* Search and Filter */}
      <div style={styles.filterSection}>
        <input
          type="text"
          placeholder="Search by Email"
          value={searchEmail}
          onChange={handleSearch}
          style={styles.input}
        />
        <select value={paymentFilter} onChange={handlePaymentFilter} style={styles.select}>
          <option value="All">All Payment Status</option>
          <option value="Pending">Pending</option>
          <option value="Paid">Paid</option>
          <option value="Failed">Failed</option>
        </select>
      </div>

      {/* Orders Table */}
      {filteredOrders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div style={styles.tableWrapper}>
          <table style={styles.table} className='table'>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>User Name</th>
                <th>User Email</th>
                <th>Total ₹</th>
                <th>Payment</th>
                <th>Status</th>
                <th>Ordered At</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.userId?.name}</td>
                  <td>{order.userId?.email}</td>
                  <td>₹{order.totalAmount}</td>
                  <td>{order.paymentStatus || 'Pending'}</td>
                  <td>{order.status}</td>
                  <td>{new Date(order.createdAt).toLocaleString()}</td>
                  <td>
  <Link to={`/AdminOrderDetails/${order._id}`} style={styles.viewDetailsButton}>
    View Details
  </Link>
</td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '30px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  filterSection: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  input: {
    padding: '8px',
    width: '300px',
    fontSize: '16px',
  },
  select: {
    padding: '8px',
    fontSize: '16px',
  },
  tableWrapper: {
    overflowX: 'auto',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    backgroundColor: '#fff',
    borderRadius: '10px',
    overflow: 'hidden',
  },
  actionButton: {
    padding: '6px 10px',
    margin: '5px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  viewDetailsButton: {
    padding: '5px 10px',
    backgroundColor: '#2196F3',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default AdminOrder;