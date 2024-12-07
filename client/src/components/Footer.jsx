import '../css/footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-section">
                <h3 className="footer-logo">E-Shop</h3>
                <p>Your one-stop shop for all your needs. Shop with us and experience the best online shopping experience.</p>
            </div>
            <div className="footer-section">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#shop">Shop</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                </ul>
            </div>
            
        </footer>
    );
};

export default Footer;
