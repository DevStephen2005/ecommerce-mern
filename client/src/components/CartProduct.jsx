import PropTypes from 'prop-types';
import { useContext } from 'react';
import { cartContext } from '../features/ContextProvider';
import '../css/cartproduct.css';


const CartProduct = ({product}) => {

    const {cart, dispatch} = useContext(cartContext)

    const increase = (id) => {
        const index = cart.findIndex(p => p.id === id)

        if(cart[index].quantity < 10)
            dispatch({type: 'increase',id})
    }

    const decrease = (id) => {
        const index = cart.findIndex(p => p.id === id)

        if(cart[index].quantity > 1)
            dispatch({type: 'decrease',id})
    }


  return (
    <div className="cart-item ">
      <img src={product.thumbnail} alt={product.title} className="cart-item-image" />
      <div className="cart-item-detail">
        <h4 className="cart-item-title">{product.title}</h4>
        <h5 className="cart-item-price">${product.price}</h5>
        <div className="cart-item-buttons">
          <button className="btn-circle" onClick={() => decrease(product.id)} >-</button>
          <span className="cart-item-quantity">{product.quantity}</span>
          <button className="btn-circle" onClick={() => increase(product.id)}>+</button>
        </div>
      </div>
      <button className="removeBtn" type='button'
      onClick={() => dispatch({type: 'remove',id: product.id})} >Remove Cart</button>
    </div>
  )
}

CartProduct.propTypes = {
    product: PropTypes.shape({
      thumbnail: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired
    }).isRequired,
    onRemove: PropTypes.func.isRequired,
    onDecrease: PropTypes.func.isRequired,
    onIncrease: PropTypes.func.isRequired,
  };

export default CartProduct