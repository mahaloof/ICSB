import React, { useState } from 'react';
import './Blog.css';

function Blog() {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = () => {
    const emailAddress = 'mahaloofpapt@gmail.com';
    const subject = 'Article Submission';
    const body = 'I would like to submit my article...';
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl);
  };

  return (
    <div className="blog-page-container">
      <nav className="navbar">
        <div className="navbar-logo" style={{ justifyContent: 'flex-start', textAlign: 'left' }}>Blog</div>
      </nav>
      <div className="center-content">
        <button className="submit-button" onClick={() => setShowPopup(true)}>Submit Article</button>
      </div>
      {showPopup && (
        <div className="popup-container">
          <p className="popup-quote">
            “Your words have the power to spark minds, inspire hearts, and change the world. Don’t just think it—write it.”
          </p>
          <p className="popup-message">
            Ready to share your unique perspective? Submit your article and let your voice be heard by a community eager for inspiration and new ideas!
          </p>
          <button className="popup-submit-button" onClick={handleSubmit}>Submit my Article</button>
          <button className="popup-close-button" onClick={() => setShowPopup(false)}>Close</button>
        </div>
      )}
      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)} />
      )}
    </div>
  );
}

export default Blog;
