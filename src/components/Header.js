import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  const fullText = "CAFÉ NOT FOUND";
  const typingSpeed = 150;
  const pauseTime = 2000;

  useEffect(() => {
    if (isTyping && currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(timer);
    } else if (currentIndex >= fullText.length) {
      const timer = setTimeout(() => {
        setIsTyping(false);
        setDisplayText('');
        setCurrentIndex(0);
        setIsTyping(true);
      }, pauseTime);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, isTyping, fullText]);

  return (
    <header className="header">
      <div className="header-container">
        {/* Main Logo */}
        <div className="logo-container">
          <h1 className="main-logo">
            <span className="logo-prefix">></span>
            <span className="logo-text glitch" data-text={displayText}>
              {displayText}
            </span>
            <span className="cursor">|</span>
          </h1>
          <div className="logo-subtitle">
            <span className="subtitle-text">WHERE ONLY CONSTANT IS CHANGE</span>
            <span className="subtitle-dots">...</span>
          </div>
        </div>

        {/* Status Bar */}
        <div className="status-bar">
          <div className="status-item">
            <span className="status-label">STATUS:</span>
            <span className="status-value">OPERATIONAL</span>
          </div>
          <div className="status-item">
            <span className="status-label">TIME:</span>
            <span className="status-value">
              {new Date().toLocaleTimeString('en-US', {
                hour12: false,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
              })}
            </span>
          </div>
          <div className="status-item">
            <span className="status-label">VERSION:</span>
            <span className="status-value">v2.0.1</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
