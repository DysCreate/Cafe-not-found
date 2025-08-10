import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const menuItems = [
    { id: 'home', path: '/home', icon: '🏠', label: 'Home' },
    { id: 'menu', path: '/menu', icon: '☕', label: 'Menu' },
    { id: 'effects', path: '/effects', icon: '⚡', label: 'Side Effects' },
    { id: 'reviews', path: '/reviews', icon: '💬', label: 'Reviews' },
    { id: 'contact', path: '/contact', icon: '📞', label: 'Contact' }
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-container">
        {/* Logo Area */}
        <div className="sidebar-logo">
          <div className="logo-icon">⚡</div>
          <div className="logo-text">CAFÉ</div>
        </div>

        {/* Navigation Menu */}
        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${isActive(item.path) ? 'active' : ''}`}
              onClick={() => handleNavigation(item.path)}
              title={item.label}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Status Indicator */}
        <div className="sidebar-status">
          <div className="status-indicator">
            <div className="status-dot"></div>
            <span className="status-text">ONLINE</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
