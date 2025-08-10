import React, { useState, useEffect } from 'react';
import './MenuSection.css';

const MenuSection = () => {
  const [currentMenuItems, setCurrentMenuItems] = useState([]);
  const [isScrambling, setIsScrambling] = useState(false);

  // Quirky menu items with cyberpunk theme
  const menuItems = [
    { name: "Neural Latte", price: "$4.20", effect: "Enhances cognitive functions" },
    { name: "Quantum Espresso", price: "$3.99", effect: "Temporal distortion field" },
    { name: "Cyber Cappuccino", price: "$5.50", effect: "Digital consciousness boost" },
    { name: "Glitch Mocha", price: "$4.75", effect: "Reality perception shift" },
    { name: "Holographic Hot Chocolate", price: "$6.00", effect: "Visual enhancement" },
    { name: "Binary Black Coffee", price: "$3.25", effect: "Pure digital clarity" },
    { name: "Matrix Matcha", price: "$5.99", effect: "Green code infusion" },
    { name: "Pixelated Pumpkin Spice", price: "$4.50", effect: "Autumn glitch mode" },
    { name: "Viral Vanilla", price: "$4.25", effect: "Contagious sweetness" },
    { name: "Firewall Frappuccino", price: "$6.50", effect: "Security protocol boost" },
    { name: "Encrypted Earl Grey", price: "$4.00", effect: "Data protection tea" },
    { name: "Ransomware Red Eye", price: "$5.25", effect: "System takeover energy" }
  ];

  // Scramble text function
  const scrambleText = (text) => {
    const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return text.split('').map(() => chars[Math.floor(Math.random() * chars.length)]).join('');
  };

  // Update menu items randomly
  useEffect(() => {
    const updateMenu = () => {
      setIsScrambling(true);
      
      setTimeout(() => {
        const shuffled = [...menuItems].sort(() => Math.random() - 0.5);
        const selected = shuffled.slice(0, 6); // Show 6 items
        setCurrentMenuItems(selected);
        setIsScrambling(false);
      }, 500);
    };

    // Initial menu
    updateMenu();

    // Update every 3 seconds
    const interval = setInterval(updateMenu, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="menu-section-container">
      <div className="menu-header">
        <h2 className="menu-title glitch" data-text="DYNAMIC MENU">DYNAMIC MENU</h2>
        <div className="menu-status">
          <span className="status-indicator">●</span>
          <span className="status-text">LIVE UPDATES</span>
        </div>
      </div>

      <div className="menu-content">
        <div className="menu-grid">
          {currentMenuItems.map((item, index) => (
            <div key={index} className="menu-item">
              <div className="item-header">
                <h3 className="item-name">
                  {isScrambling ? scrambleText(item.name) : item.name}
                </h3>
                <span className="item-price">{item.price}</span>
              </div>
              <p className="item-effect">
                {isScrambling ? scrambleText(item.effect) : item.effect}
              </p>
              <div className="item-indicators">
                <span className="indicator">⚡</span>
                <span className="indicator">💻</span>
                <span className="indicator">🔮</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="menu-footer">
        <div className="update-info">
          <span className="update-text">NEXT UPDATE IN:</span>
          <span className="update-timer">3s</span>
        </div>
        <div className="menu-stats">
          <span className="stat">ITEMS: {currentMenuItems.length}</span>
          <span className="stat">STATUS: ACTIVE</span>
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
