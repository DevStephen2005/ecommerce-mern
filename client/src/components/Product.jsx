import PropTypes from 'prop-types';
import '../css/product.css';
import { useContext } from 'react';
import { cartContext } from '../features/ContextProvider';

const Product = ({ product }) => {

  const {dispatch} = useContext(cartContext)

  return (
    <div className="col">
      <div className="card">
        <img
          src={product.thumbnail}
          className="card-img-top"
          alt={product.title}
        />
        <div className="card-body">
          <h4 className="card-title">{product.title}</h4>
          <h5 className="card-price">${product.price}</h5>
          <button className="addCartBtn" onClick={() => {
           dispatch({ type: 'add', product: product });
          alert('Product added to cart!');
          }}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};

export default Product;
