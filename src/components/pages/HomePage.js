import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="home-container">
        <div className="home-header">
          <h1 className="home-title glitch" data-text="WELCOME TO CAFÉ NOT FOUND">WELCOME TO CAFÉ NOT FOUND</h1>
          <p className="home-subtitle">v2.0</p>
        </div>

        <div className="home-content">
          <div className="welcome-section">
            <h2 className="section-title">SYSTEM STATUS</h2>
            <div className="status-grid">
              <div className="status-card">
                <div className="status-icon">⚡</div>
                <div className="status-info">
                  <span className="status-label">POWER</span>
                  <span className="status-value">ONLINE</span>
                </div>
              </div>
              <div className="status-card">
                <div className="status-icon">🌐</div>
                <div className="status-info">
                  <span className="status-label">NETWORK</span>
                  <span className="status-value">CONNECTED</span>
                </div>
              </div>
              <div className="status-card">
                <div className="status-icon">🔒</div>
                <div className="status-info">
                  <span className="status-label">SECURITY</span>
                  <span className="status-value">ACTIVE</span>
                </div>
              </div>
              <div className="status-card">
                <div className="status-icon">📡</div>
                <div className="status-info">
                  <span className="status-label">SIGNAL</span>
                  <span className="status-value">STRONG</span>
                </div>
              </div>
            </div>
          </div>

          <div className="info-section">
            <h2 className="section-title">QUICK ACCESS</h2>
            <div className="quick-links">
              <div className="link-card">
                <span className="link-icon">☕</span>
                <span className="link-text">VIEW MENU</span>
              </div>
              <div className="link-card">
                <span className="link-icon">⚡</span>
                <span className="link-text">MONITOR EFFECTS</span>
              </div>
              <div className="link-card">
                <span className="link-icon">💬</span>
                <span className="link-text">READ REVIEWS</span>
              </div>
              <div className="link-card">
                <span className="link-icon">📞</span>
                <span className="link-text">CONTACT US</span>
              </div>
            </div>
          </div>

          <div className="terminal-section">
            <h2 className="section-title">SYSTEM LOG</h2>
            <div className="terminal-window">
              <div className="terminal-header">
                <span className="terminal-title">CAFÉ_NOT_FOUND.exe</span>
                <span className="terminal-status">RUNNING</span>
              </div>
              <div className="terminal-content">
                <div className="log-line">[INFO] System initialized successfully</div>
                <div className="log-line">[INFO] Cyberpunk terminal interface loaded</div>
                <div className="log-line">[INFO] Neon blue color scheme applied</div>
                <div className="log-line">[INFO] Grid background pattern active</div>
                <div className="log-line">[INFO] CRT scan lines enabled</div>
                <div className="log-line">[INFO] Glitch effects calibrated</div>
                <div className="log-line">[INFO] Ready for user interaction</div>
                <div className="log-line">[USER] Welcome to the future of café interfaces</div>
                <div className="log-line cursor">_</div>
              </div>
            </div>
          </div>
        </div>

        <div className="home-footer">
          <div className="footer-info">
            <span>SYSTEM: CAFÉ NOT FOUND v2.0</span>
            <span>BUILD: 2024.01.15</span>
            <span>STATUS: OPERATIONAL</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
