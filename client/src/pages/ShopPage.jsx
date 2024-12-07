import { useState } from 'react';
import productData from '../../data.json';
import Product from '../components/Product';
import '../css/products.css';

const ShopPage = () => {
  const [products] = useState(productData.products)
    const [filterProducts,setFilterProducts] = useState(productData.products)



    const filterHandler = (event) => {
      const searchQuery = event.target.value.toLowerCase();
      setFilterProducts(products.filter(p => p.title.toLowerCase().includes(searchQuery)));
    }

  return (
    <div className="products-container">
      <div className="proSearch">
      <input type="text" placeholder='Enter the Products Name...' onChange={filterHandler} />
      </div>
      <h2>Latest Collections</h2>
      <div className="products-grid">
        {filterProducts && filterProducts.slice(0,10).map((p) => (
          <Product key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
