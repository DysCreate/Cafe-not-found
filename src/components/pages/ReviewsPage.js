import React from 'react';
import ReviewsSection from '../ReviewsSection';
import './ReviewsPage.css';

const ReviewsPage = () => {
  return (
    <div className="reviews-page">
      <div className="reviews-page-container">
        <div className="reviews-page-header">
          <h1 className="reviews-page-title glitch" data-text="GLITCHY REVIEWS">GLITCHY REVIEWS</h1>
          <p className="reviews-page-subtitle">Customer Feedback from the Digital Realm</p>
        </div>

        <div className="reviews-page-content">
          <ReviewsSection />
        </div>

        <div className="reviews-page-footer">
          <div className="reviews-info">
            <span>REVIEWS VERSION: 1.3.0</span>
            <span>LAST UPDATE: {new Date().toLocaleTimeString()}</span>
            <span>TOTAL REVIEWS: 42</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;
