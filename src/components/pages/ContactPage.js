import React, { useState } from 'react';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    alert('Message sent to the digital realm! 📡');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">
      <div className="contact-page-container">
        <div className="contact-page-header">
          <h1 className="contact-page-title glitch" data-text="CONTACT TERMINAL">CONTACT TERMINAL</h1>
          <p className="contact-page-subtitle">Establish Connection with the Digital Realm</p>
        </div>

        <div className="contact-page-content">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info-section">
              <h2 className="section-title">SYSTEM INFO</h2>
              <div className="info-cards">
                <div className="info-card">
                  <div className="info-icon">📍</div>
                  <div className="info-content">
                    <span className="info-label">LOCATION</span>
                    <span className="info-value">Digital Realm, Cyber Space</span>
                  </div>
                </div>
                <div className="info-card">
                  <div className="info-icon">📧</div>
                  <div className="info-content">
                    <span className="info-label">EMAIL</span>
                    <span className="info-value">contact@cafenotfound.cyber</span>
                  </div>
                </div>
                <div className="info-card">
                  <div className="info-icon">📱</div>
                  <div className="info-content">
                    <span className="info-label">PHONE</span>
                    <span className="info-value">+1-555-CYBER-01</span>
                  </div>
                </div>
                <div className="info-card">
                  <div className="info-icon">🌐</div>
                  <div className="info-content">
                    <span className="info-label">WEBSITE</span>
                    <span className="info-value">www.cafenotfound.cyber</span>
                  </div>
                </div>
              </div>

              <div className="status-section">
                <h3 className="status-title">SYSTEM STATUS</h3>
                <div className="status-indicators">
                  <div className="status-item">
                    <span className="status-dot online"></span>
                    <span className="status-text">ONLINE</span>
                  </div>
                  <div className="status-item">
                    <span className="status-dot online"></span>
                    <span className="status-text">RESPONSIVE</span>
                  </div>
                  <div className="status-item">
                    <span className="status-dot online"></span>
                    <span className="status-text">SECURE</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-section">
              <h2 className="section-title">SEND MESSAGE</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">NAME</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">EMAIL</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">SUBJECT</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">MESSAGE</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-textarea"
                    rows="6"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="submit-btn">
                  <span className="btn-icon">📡</span>
                  <span className="btn-text">TRANSMIT MESSAGE</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="contact-page-footer">
          <div className="contact-info">
            <span>CONTACT VERSION: 1.0.0</span>
            <span>LAST UPDATE: {new Date().toLocaleTimeString()}</span>
            <span>STATUS: OPERATIONAL</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
