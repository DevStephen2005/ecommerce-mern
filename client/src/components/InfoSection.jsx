import '../css/infosection.css';

const InfoSection = () => {
    const infoItems = [
        {
            icon: '🚚',
            title: 'Free Shipping',
            description: 'Get your orders delivered with no extra cost',
        },
        {
            icon: '🎧',
            title: 'Support 24/7',
            description: 'We are here to assist you anytime',
        },
        {
            icon: '💸',
            title: '100% Money Back',
            description: 'Full refund if you are not satisfied',
        },
        {
            icon: '🔒',
            title: 'Payment Secure',
            description: 'Your payment information is safe with us',
        },
        {
            icon: '🏷️',
            title: 'Discount',
            description: 'Enjoy the best prices on our products',
        },
    ];

    return (
        <div className="info-section">
            {infoItems.map((item, index) => (
                <div key={index} className="info-item">
                    <div className="icon">{item.icon}</div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    );
};

export default InfoSection;
