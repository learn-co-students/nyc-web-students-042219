import React from "react";
import "./StarRating.css";

function StarRating({ rating, maxRating, symbol, color }) {
  return (
    <div className="ratings">
      <div className="empty-stars">{symbol.repeat(maxRating)}</div>
      <div
        className="full-stars"
        style={{
          width: `${(rating / maxRating) * 100}%`,
          WebkitTextStroke: `1px ${color}`
        }}
      >
        {symbol.repeat(maxRating)}
      </div>
    </div>
  );
}

StarRating.defaultProps = {
  rating: 0,
  maxRating: 5,
  symbol: "★",
  color: "goldenrod"
};

export default StarRating;
