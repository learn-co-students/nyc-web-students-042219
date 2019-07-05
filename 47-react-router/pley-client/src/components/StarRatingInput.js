import React from "react";
import "./StarRating.css";

function StarRatingInput({ value, maxRating, symbol, color, name, onClick }) {
  const handleClick = e => {
    e.persist();
    const newRating = Math.ceil(
      (e.nativeEvent.offsetX / e.target.offsetWidth) * maxRating
    );
    onClick({ ...e, target: { ...e.target, value: newRating, name: name } });
  };

  return (
    <div
      onClick={handleClick}
      className="ratings"
      style={{ cursor: "pointer" }}
    >
      <div className="empty-stars">{symbol.repeat(maxRating)}</div>
      <div
        className="full-stars"
        style={{
          width: `${(value / maxRating) * 100}%`,
          WebkitTextStroke: `1px ${color}`
        }}
      >
        {symbol.repeat(maxRating)}
      </div>
    </div>
  );
}

StarRatingInput.defaultProps = {
  value: 0,
  maxRating: 5,
  symbol: "★",
  color: "goldenrod"
};

export default StarRatingInput;
