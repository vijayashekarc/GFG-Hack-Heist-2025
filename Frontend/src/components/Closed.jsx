import React from "react";
import { useNavigate } from "react-router-dom";
import "./Closed.css";

const Closed = () => {
  const navigate = useNavigate();

  return (
    <div className="closed-container">
         <img src="/title.png" alt="Hack Heist"  className="image"/>
      <div className="closed-card">
        {/* Animated Dali Mask */}
        <div className="closed-animation">
          <svg
            className="mask-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            width="100"
            height="100"
          >
            <circle
              cx="100"
              cy="100"
              r="95"
              fill="none"
              stroke="#ff1f1f"
              strokeWidth="4"
              className="mask-circle"
            />
            <path
              d="M60 80 C80 50, 120 50, 140 80
                 C150 100, 120 140, 100 140
                 C80 140, 50 100, 60 80 Z"
              fill="none"
              stroke="#ff4b4b"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mask-face"
            />
            <path
              d="M70 110 Q100 130 130 110"
              fill="none"
              stroke="#ff4b4b"
              strokeWidth="3"
              className="mask-mustache"
            />
            <circle
              cx="75"
              cy="90"
              r="5"
              fill="none"
              stroke="#ff4b4b"
              strokeWidth="2"
              className="mask-eye"
            />
            <circle
              cx="125"
              cy="90"
              r="5"
              fill="none"
              stroke="#ff4b4b"
              strokeWidth="2"
              className="mask-eye"
            />
          </svg>
        </div>

        <h1 className="closed-title">Registration Closed</h1>
        <p className="closed-message">
          All spots for this Hack-heist-2025 are full. Better luck next time!
        </p>
        <p className="closed-message">Stay tuned for upcoming events.</p>

        {/* <button className="closed-btn" onClick={() => navigate("/")}>
          Back to Home
        </button> */}
      </div>
    </div>
  );
};

export default Closed;
