import { useState } from 'react';
import productData from '../../data.json';
import Product from '../components/Product';
import '../css/products.css';

const Products = () => {
  const [products, setProducts] = useState(productData.products);

  return (
    <div className="products-container">
      <h2>Top Products</h2>
      <div className="products-grid">
        {products.slice(0,8).map((p) => (
          <Product key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default Products;
