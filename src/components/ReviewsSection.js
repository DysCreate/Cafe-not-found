import React, { useState, useEffect } from 'react';
import './ReviewsSection.css';

const ReviewsSection = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [isScrambling, setIsScrambling] = useState(false);
  const [displayText, setDisplayText] = useState('');

  const reviews = [
    {
      author: "Cyber_Hacker_42",
      rating: "★★★★★",
      text: "The Neural Latte literally made me see code in my dreams. 10/10 would glitch again!",
      timestamp: "2024-01-15 14:23:42"
    },
    {
      author: "Digital_Nomad_99",
      rating: "★★★★☆",
      text: "Quantum Espresso gave me the power to debug reality itself. Slight temporal displacement though.",
      timestamp: "2024-01-14 09:17:33"
    },
    {
      author: "Matrix_Agent_7",
      rating: "★★★★★",
      text: "This café doesn't exist in the real world. Perfect for escaping the simulation.",
      timestamp: "2024-01-13 22:45:11"
    },
    {
      author: "Glitch_Guru_2024",
      rating: "★★★★☆",
      text: "The side effects are real! My keyboard now types in binary automatically.",
      timestamp: "2024-01-12 16:38:27"
    },
    {
      author: "Neon_Dreamer_X",
      rating: "★★★★★",
      text: "Found this place in a back alley of the internet. Best coffee in the digital realm!",
      timestamp: "2024-01-11 03:12:55"
    }
  ];

  // Scramble text function
  const scrambleText = (text) => {
    const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    return text.split('').map(() => chars[Math.floor(Math.random() * chars.length)]).join('');
  };

  // Animate text from scrambled to real
  const animateText = (text) => {
    setIsScrambling(true);
    setDisplayText(scrambleText(text));
    
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText(prev => 
          text.substring(0, currentIndex + 1) + scrambleText(text.substring(currentIndex + 1))
        );
        currentIndex++;
      } else {
        setDisplayText(text);
        setIsScrambling(false);
        clearInterval(interval);
      }
    }, 50);
  };

  // Cycle through reviews
  useEffect(() => {
    const cycleReviews = () => {
      const review = reviews[currentReview];
      animateText(review.text);
    };

    cycleReviews();

    const interval = setInterval(() => {
      setCurrentReview(prev => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentReview]);

  const currentReviewData = reviews[currentReview];

  return (
    <div className="reviews-container">
      <div className="reviews-header">
        <h2 className="reviews-title glitch" data-text="GLITCHY REVIEWS">GLITCHY REVIEWS</h2>
        <div className="reviews-status">
          <span className="status-indicator">●</span>
          <span className="status-text">LIVE FEED</span>
        </div>
      </div>

      <div className="reviews-content">
        <div className="review-card">
          <div className="review-header">
            <div className="review-author">
              <span className="author-label">USER:</span>
              <span className="author-name">{currentReviewData.author}</span>
            </div>
            <div className="review-rating">
              <span className="rating-stars">{currentReviewData.rating}</span>
            </div>
          </div>

          <div className="review-text-container">
            <p className={`review-text ${isScrambling ? 'scrambling' : ''}`}>
              {displayText}
              <span className="cursor">|</span>
            </p>
          </div>

          <div className="review-footer">
            <span className="review-timestamp">{currentReviewData.timestamp}</span>
            <span className="review-id">ID: #{String(currentReview + 1).padStart(3, '0')}</span>
          </div>
        </div>

        <div className="reviews-navigation">
          <div className="nav-dots">
            {reviews.map((_, index) => (
              <span
                key={index}
                className={`nav-dot ${index === currentReview ? 'active' : ''}`}
                onClick={() => setCurrentReview(index)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="reviews-footer">
        <div className="footer-info">
          <span className="info-text">TOTAL REVIEWS: {reviews.length}</span>
          <span className="info-text">AVG RATING: 4.8/5</span>
        </div>
        <div className="footer-status">
          <span className="status-badge">ACTIVE</span>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
