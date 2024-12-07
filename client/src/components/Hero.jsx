import '../css/hero.css';
import heroImg from '../assets/images/banner.jpeg'; // Use the actual path to your image
import { Link } from 'react-router-dom';

const Hero = () => {
  // Define the list of categories
  const categories = [
    'Electronics',
    'Fashion',
    'Home & Kitchen',
    'Beauty',
    'Sports',
    'Automotive',
  ];

  return (
    <div className="hero-container">
      <div className="hero-sidebar">
        <h3 className="hero-title">Shop by Categories</h3>
        <ul className="hero-categories">
          {categories.map((category, index) => (
            <li key={index} className="category-item">
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div className="hero-content">
        <div className="hero-text">
          <h1>Welcome to E-Shop</h1>
          <p>Million+ Products</p>
          <Link to='/shop' > <button className="shop-now-btn">Shop Now</button> </Link>
        </div>
        <div className="hero-image">
          <img src={heroImg} alt="Shop Now" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
