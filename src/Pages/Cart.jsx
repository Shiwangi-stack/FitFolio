import { useContext } from 'react';
import { CartContext } from './CartContext';
import { useParams, useNavigate } from 'react-router-dom';

const CartPage = () => {
  const { userId } = useParams();
  const { cartItems, clearCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  const placeOrder = () => {
    navigate(`/Checkout/${userId}`);
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.sellingprice * item.quantity, 0);

  return (
    <div className="container py-5">
      <h2 className="mb-4">My Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-muted">No items in cart.</p>
      ) : (
        <div className="row">
          {/* Cart Items */}
          <div className="col-lg-8">
            {cartItems.map((item, index) => (
              <div className="card mb-3 shadow-sm" key={index}>
                <div className="card-body d-flex flex-column flex-md-row align-items-md-center gap-3">
                  <div>
                    <img
    src={item.photo1}
    alt={item.title}
    style={{
      width: "100px",
      height: "100px",
      objectFit: "cover",
      borderRadius: "8px"
    }}
  />
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text text-muted mb-1">Price: ₹{item.sellingprice}</p>
                    <p className="card-text mb-2">Quantity: {item.quantity}</p>
                    <div className="d-flex gap-2">
                      <button className="btn btn-outline-secondary btn-sm" onClick={() => decreaseQuantity(item._id)}>-</button>
                      <button className="btn btn-outline-secondary btn-sm" onClick={() => increaseQuantity(item._id)}>+</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="col-lg-4">
            <div className="card bg-light shadow-sm">
              <div className="card-body">
                <h5 className="card-title mb-3">Order Summary</h5>
                <p>Total Items: {cartItems.reduce((acc, item) => acc + item.quantity, 0)}</p>
                <h5>Subtotal: ₹{subtotal.toFixed(2)}</h5>
                <button className="btn btn-primary w-100 mt-3" onClick={placeOrder}>
                  Place Order
                </button>
                <button className="btn btn-outline-danger w-100 mt-2" onClick={clearCart}>
                  Clear Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;