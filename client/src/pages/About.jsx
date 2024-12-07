import '../css/about.css'
import aboutImage from '../assets/images/about.png' 

const About = () => {

    
  return (
    <div className="about-section">
      <h1>About Us</h1>
      <div className="about-container">
        <div className="about-content">
          <h2>Welcome To E-Shop</h2>
          <p>
            Welcome to E-Shop, your go-to destination for everything you need, all in one place. Whether you’re shopping for the latest tech gadgets, fashion trends, home essentials, or everyday necessities, we offer a wide range of products designed to meet all your needs and preferences.
          </p>

          <h3>Our Mission</h3>
          <p>
            At E-Shop, our mission is to provide our customers with the best online shopping experience. We aim to offer a vast selection of high-quality products at competitive prices, paired with exceptional customer service.
          </p>

          <h3>Why Choose Us?</h3>
          <ul>
            <li>Wide Product Selection: From electronics to clothing, beauty products to home decor, we offer millions of items from trusted brands and emerging sellers.</li>
            <li>Convenience: Shop anytime, anywhere, with fast and reliable delivery options that get your orders to you when you need them.</li>
            <li>Customer Satisfaction: We are dedicated to providing seamless transactions, secure payment options, and excellent support.</li>
            <li>Innovative Shopping Experience: With advanced search options, user-friendly interfaces, and personalized recommendations, we make it easy to find exactly what you’re looking for.</li>
          </ul>

          <h3>Our Values</h3>
          <ul>
            <li><strong>Customer First:</strong> We put our customers first and are constantly innovating to improve your shopping experience.</li>
            <li><strong>Integrity and Trust:</strong> We uphold the highest standards of integrity and transparency in everything we do.</li>
            <li><strong>Commitment to Quality:</strong> We ensure the products we offer are of the highest quality, sourced from the best suppliers and brands.</li>
            <li><strong>Sustainability:</strong> We are committed to reducing our environmental footprint through eco-friendly practices and supporting brands that share our values.</li>
          </ul>

          <h3>Our Journey</h3>
          <p>
            What started as a small business with a vision has grown into a leading e-commerce platform trusted by millions of customers worldwide. With every milestone, we’ve stayed true to our goal: making online shopping better, faster, and smarter.
          </p>

          <h3>Join Us on the Journey</h3>
          <p>
            Whether you are shopping for yourself, family, or friends, we’re here to help you discover great deals and find what you love. Explore the world of [Your Store Name] and experience a new era of online shopping.
          </p>

          <button className="learn-more-btn">Learn More</button>
        </div>
        <div className="about-image">
          <img src={aboutImage} alt="About Us" />
        </div>
      </div>
    </div>
  );
};

export default About;
