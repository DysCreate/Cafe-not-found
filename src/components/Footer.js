import React, { useState, useEffect } from 'react';
import './Footer.css';

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <span className="footer-label">SYSTEM:</span>
            <span className="footer-value">CAFÉ NOT FOUND v2.0.1</span>
          </div>
          
          <div className="footer-section">
            <span className="footer-label">TIME:</span>
            <span className="footer-value">
              {currentTime.toLocaleTimeString('en-US', {
                hour12: false,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
              })}
            </span>
          </div>
          
          <div className="footer-section">
            <span className="footer-label">DATE:</span>
            <span className="footer-value">
              {currentTime.toLocaleDateString('en-US', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
              })}
            </span>
          </div>
          
          <div className="footer-section">
            <span className="footer-label">STATUS:</span>
            <span className="footer-value">OPERATIONAL</span>
          </div>
        </div>
        
        <div className="footer-credits">
          <span className="credits-text">
            DEVELOPED BY: CYBER_DEV_2024
          </span>
          <span className="cursor">|</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
