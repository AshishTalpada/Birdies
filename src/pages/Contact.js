import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate email submission
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">
      <div className="contact-banner">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Reach out to us using the details below or fill out the form.</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <ul>
            <li>Email: <a href="mailto:info@birdes.com">info@birdes.com</a></li>
            <li>Phone: <a href="tel:+123456789">+1 234 567 89</a></li>
            <li>Address: 123 Bird Lane, Kitchener, ON N2P 1X1</li>
          </ul>
          <p>Follow us on social media:</p>
          <div className="social-icons">
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
            <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send Us a Message</h2>
          {isSubmitted && <p className="success-message">Your message has been sent successfully!</p>}
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Write your message here"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
