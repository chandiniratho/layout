import React, { useState } from 'react';
import './Contact.css'
import Header from './Header';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!formData.name) {
      isValid = false;
      formErrors['name'] = 'Name is required';
    }

    if (!formData.email) {
      isValid = false;
      formErrors['email'] = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      isValid = false;
      formErrors['email'] = 'Email is invalid';
    }

    if (!formData.message) {
      isValid = false;
      formErrors['message'] = 'Message is required';
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Process form data (e.g., send to a server)
      setSuccessMessage('Thank you for your message!');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setErrors({});
    }
  };

  return (
    <div><Header />
    <div className="contact-container">
      
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>
          {errors.message && <span className="error">{errors.message}</span>}
        </div>

        <button type="submit">Submit</button>
      </form>
      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
    </div>
  );
}

export default Contact;
