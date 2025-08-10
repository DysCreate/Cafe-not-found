import React from 'react';
import MenuSection from '../MenuSection';
import './MenuPage.css';

const MenuPage = () => {
  return (
    <div className="menu-page">
      <div className="menu-page-container">
        <div className="menu-page-header">
          <h1 className="menu-page-title glitch" data-text="CYBERPUNK MENU">CYBERPUNK MENU</h1>
          <p className="menu-page-subtitle">Dynamic Digital Delicacies</p>
        </div>

        <div className="menu-page-content">
          <MenuSection />
        </div>

        <div className="menu-page-footer">
          <div className="menu-info">
            <span>MENU VERSION: 2.1.0</span>
            <span>LAST UPDATE: {new Date().toLocaleTimeString()}</span>
            <span>ITEMS: DYNAMIC</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
