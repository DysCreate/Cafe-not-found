import React from 'react';
import SideEffectMonitor from '../SideEffectMonitor';
import './EffectsPage.css';

const EffectsPage = () => {
  return (
    <div className="effects-page">
      <div className="effects-page-container">
        <div className="effects-page-header">
          <h1 className="effects-page-title glitch" data-text="SIDE EFFECT MONITOR">SIDE EFFECT MONITOR</h1>
          <p className="effects-page-subtitle">Real-time Health & Energy Tracking</p>
        </div>

        <div className="effects-page-content">
          <SideEffectMonitor />
        </div>

        <div className="effects-page-footer">
          <div className="effects-info">
            <span>MONITOR VERSION: 1.5.2</span>
            <span>LAST UPDATE: {new Date().toLocaleTimeString()}</span>
            <span>STATUS: ACTIVE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EffectsPage;
