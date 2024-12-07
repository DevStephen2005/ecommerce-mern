import { useContext } from "react";
import { cartContext } from "../features/ContextProvider";
import CartProduct from "../components/CartProduct"; 
import '../css/cartproduct.css';
import { Link } from "react-router-dom";


const Cart = () => {
  const { cart } = useContext(cartContext);

  // Calculate Total items, Total Price 
   const totalItems = cart.reduce((prev, product) => prev + product.quantity, 0);
   const totalPrice = cart.reduce((prev, product) => prev + product.quantity * product.price, 0);



  return (
    <div className="container">
      <h2 className="Shopping">Shopping Cart</h2>
      <div className="row mt-4">
        <div className="col-8">
          {
            cart.map(p => (
              <CartProduct key={p.id} product={p} />
            ))
          }
        </div>
        <div className="col-4 checkoutContainer">
          <div className="checkout-section">
            <h3>Order Summary</h3>
            <p>Total Items: {totalItems}</p>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
            <Link to='/checkout' > <button className="btn orange btn-primary btn-block" >Proceed to Checkout</button> </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
