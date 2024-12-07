import { useContext, useState } from "react";
import "../css/checkout2.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../features/ContextProvider";

const Checkout = () => {
  const { cart } = useContext(cartContext);


  const [address,setAddress] = useState()
  const [email,setEmail] = useState()
  const [zipcode,setZipcode] = useState()
  const [mobileNo,setMobileNo] = useState()

  const navigate = useNavigate()

const placeOrderHandler = () => {
  axios.post("http://localhost:8000/checkout",{address,email,zipcode,mobileNo})
  .then((result) => {
    console.log(result)
    navigate('/orderSuccess')
  })
  .catch(err => console.log(err)
  )
}
const totalItems = cart.reduce((prev, product) => prev + product.quantity, 0);
const totalPrice = cart.reduce((prev, product) => prev + product.quantity * product.price, 0);

  return (
    <div className="checkout-container">
      <h3>CASH ON DELIVERY AVAILABLE</h3>
      <div className="checkout-form">
        <div className="billing-info">
          <h2>Shipping Information</h2>
          <form >
            <label>Address</label>
            <input type="text" placeholder="Enter your Address"
             onChange={(e) => setAddress(e.target.value)}  />
            <label>Email</label>
            <input type="email" placeholder="Enter your City"
            onChange={(e) => setEmail(e.target.value)} />
            <label>Zip Code</label>
            <input type="text" placeholder="Enter your ZipCode" 
            onChange={(e) => setZipcode(e.target.value)} />
            <label>Mobile Number</label>
            <input type="text" placeholder="Enter your Mobile No"
            onChange={(e) => setMobileNo(e.target.value)}  />
          </form>

          
        </div>

        

        <div className="order-summary">
          <h3>Order Summary</h3>
          <div className="summary-item">
            <span>Products : </span>
            <span>{totalItems} </span>
          </div>
          <div className="total-price">
            <span>Total Price: </span>
            <span>{totalPrice}</span>
          </div>
          <button className="place-order-btn" onClick={placeOrderHandler}>Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
