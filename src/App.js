import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/pages/HomePage';
import MenuPage from './components/pages/MenuPage';
import EffectsPage from './components/pages/EffectsPage';
import ReviewsPage from './components/pages/ReviewsPage';
import ContactPage from './components/pages/ContactPage';

function App() {
  const [isGlitching, setIsGlitching] = useState(false);

  // Random glitch effect
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() < 0.1) { // 10% chance every 5 seconds
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 200);
      }
    }, 5000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <Router>
      <div className={`app ${isGlitching ? 'glitch-overlay' : ''}`}>
        {/* Main Layout */}
        <div className="app-container">
          {/* Left Sidebar */}
          <Sidebar />
          
          {/* Main Content Area */}
          <main className="main-content">
            {/* Header with Logo */}
            <Header />
            
            {/* Routes */}
            <Routes>
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/effects" element={<EffectsPage />} />
              <Route path="/reviews" element={<ReviewsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
            
            {/* Footer */}
            <Footer />
          </main>
        </div>
        
        {/* CRT Overlay Effect */}
        <div className="crt-overlay"></div>
      </div>
    </Router>
  );
}

export default App;
