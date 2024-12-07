import  { useState } from 'react';
import '../css/contactPage.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // You can handle form submission logic here (API calls, etc.)

    axios.post("http://localhost:8000/contact",formData)
    .then(result => 
    {
        console.log(result)
        toast.success("Message sent successfully")
    })
    .catch(err => console.log(err)
    )
  };

  return (
    <div className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          <ul>
            <li><i className="fa fa-map-marker"></i> 4671 Sugar Camp Road, Owatonna, Minnesota, 55060</li>
            <li><i className="fa fa-phone"></i> 507-475-6094</li>
            <li><i className="fa fa-envelope"></i> wrubd78180@temporary-mail.net</li>
          </ul>
        </div>
        <div className="form-wrapper">
          <h3>Send Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Type your Message..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
