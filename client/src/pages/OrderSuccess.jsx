import { Link } from 'react-router-dom';
import '../css/orderSuccess.css';

const OrderSuccess = () => {
  return (
    <div className="payment-success-container">
      <div className="payment-success-card">
        <div className="payment-success-icon">
          <span>&#36;</span> {/* This represents the dollar sign icon */}
        </div>
        <h2>Order Completed</h2>
        <p>Thank you for your order!</p>
        <Link to='/home' > <button className="continue-shopping-button">Continue Shopping</button> </Link>
      </div>
    </div>
  );
};

export default OrderSuccess;
