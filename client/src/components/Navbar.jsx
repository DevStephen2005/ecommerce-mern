import { Link } from 'react-router-dom';
import '../css/navbar.css';
import { useContext } from 'react';
import { cartContext } from '../features/ContextProvider';


const NavBar = () => {

  const {cart} = useContext(cartContext)


  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/home">E-Shop</Link>
      </div>
      <div className="navbar-menu">
        <ul className="navbar-links">
          <Link to='/home' > <li><a href="/">Home</a></li> </Link>
          <Link to='/shop' > <li><a href="#">Shop</a></li> </Link>
          <Link to='/about' > <li><a href="#">About</a></li> </Link>
          <Link to='/contact' > <li><a href="#">Contact</a></li> </Link>
        </ul>
        <div className="cart">
        {/* <Link to="/cart" > <FaShoppingCart className='cartIcon'/>  </Link>  */}
        <Link to="/cart" > <p>Cart: {cart ? cart.length : 0} </p> </Link>
        </div>

      </div>
    </nav>
  );
}

export default NavBar;
