import React, { useState, useEffect } from 'react';
import './SideEffectMonitor.css';

const SideEffectMonitor = () => {
  const [energyLevel, setEnergyLevel] = useState(75);
  const [caffeineLevel, setCaffeineLevel] = useState(60);
  const [glitchLevel, setGlitchLevel] = useState(25);
  const [isGlitching, setIsGlitching] = useState(false);

  // Simulate fluctuating readings
  useEffect(() => {
    const interval = setInterval(() => {
      setEnergyLevel(prev => Math.max(0, Math.min(100, prev + (Math.random() - 0.5) * 10)));
      setCaffeineLevel(prev => Math.max(0, Math.min(100, prev + (Math.random() - 0.5) * 8)));
      setGlitchLevel(prev => Math.max(0, Math.min(100, prev + (Math.random() - 0.5) * 15)));
      
      // Random glitch effect
      if (Math.random() < 0.1) {
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 200);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Generate random graph data
  const generateGraphData = (baseValue, variance) => {
    return Array.from({ length: 20 }, () => 
      Math.max(0, Math.min(100, baseValue + (Math.random() - 0.5) * variance))
    );
  };

  const energyData = generateGraphData(energyLevel, 20);
  const caffeineData = generateGraphData(caffeineLevel, 15);
  const glitchData = generateGraphData(glitchLevel, 25);

  return (
    <div className="monitor-container">
      <div className="monitor-header">
        <h2 className="monitor-title glitch" data-text="SIDE EFFECT MONITOR">SIDE EFFECT MONITOR</h2>
        <div className="monitor-status">
          <span className="status-dot"></span>
          <span className="status-text">MONITORING</span>
        </div>
      </div>

      <div className="monitor-content">
        {/* Energy Level Graph */}
        <div className="graph-section">
          <div className="graph-header">
            <h3 className="graph-title">ENERGY LEVEL</h3>
            <span className="graph-value">{Math.round(energyLevel)}%</span>
          </div>
          <div className="graph-container">
            <svg className="graph" viewBox="0 0 200 50" preserveAspectRatio="none">
              <polyline
                className="graph-line"
                points={energyData.map((value, index) => 
                  `${index * 10},${50 - (value * 0.5)}`
                ).join(' ')}
                fill="none"
                stroke="var(--neon-blue)"
                strokeWidth="2"
              />
              <circle
                className="graph-point"
                cx={190}
                cy={50 - (energyLevel * 0.5)}
                r="3"
                fill="var(--neon-blue)"
              />
            </svg>
          </div>
        </div>

        {/* Caffeine Level Graph */}
        <div className="graph-section">
          <div className="graph-header">
            <h3 className="graph-title">CAFFEINE LEVEL</h3>
            <span className="graph-value">{Math.round(caffeineLevel)}%</span>
          </div>
          <div className="graph-container">
            <svg className="graph" viewBox="0 0 200 50" preserveAspectRatio="none">
              <polyline
                className="graph-line"
                points={caffeineData.map((value, index) => 
                  `${index * 10},${50 - (value * 0.5)}`
                ).join(' ')}
                fill="none"
                stroke="var(--neon-blue)"
                strokeWidth="2"
              />
              <circle
                className="graph-point"
                cx={190}
                cy={50 - (caffeineLevel * 0.5)}
                r="3"
                fill="var(--neon-blue)"
              />
            </svg>
          </div>
        </div>

        {/* Glitch Level Graph */}
        <div className="graph-section">
          <div className="graph-header">
            <h3 className="graph-title">GLITCH LEVEL</h3>
            <span className="graph-value">{Math.round(glitchLevel)}%</span>
          </div>
          <div className="graph-container">
            <svg className="graph" viewBox="0 0 200 50" preserveAspectRatio="none">
              <polyline
                className={`graph-line ${isGlitching ? 'glitch-line' : ''}`}
                points={glitchData.map((value, index) => 
                  `${index * 10},${50 - (value * 0.5)}`
                ).join(' ')}
                fill="none"
                stroke="var(--neon-blue)"
                strokeWidth="2"
              />
              <circle
                className="graph-point"
                cx={190}
                cy={50 - (glitchLevel * 0.5)}
                r="3"
                fill="var(--neon-blue)"
              />
            </svg>
          </div>
        </div>

        {/* Status Indicators */}
        <div className="status-indicators">
          <div className="indicator-item">
            <span className="indicator-label">SYSTEM:</span>
            <span className="indicator-value">STABLE</span>
          </div>
          <div className="indicator-item">
            <span className="indicator-label">ALERTS:</span>
            <span className="indicator-value">0</span>
          </div>
          <div className="indicator-item">
            <span className="indicator-label">UPTIME:</span>
            <span className="indicator-value">99.9%</span>
          </div>
        </div>
      </div>

      <div className="monitor-footer">
        <div className="footer-text">
          <span>LAST UPDATE: {new Date().toLocaleTimeString()}</span>
        </div>
        <div className="footer-status">
          <span className="status-badge">ACTIVE</span>
        </div>
      </div>
    </div>
  );
};

export default SideEffectMonitor;
