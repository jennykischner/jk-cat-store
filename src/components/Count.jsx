import React, { useState } from 'react';

const Count = ({ initialCount, onCountChange, maxCount }) => {
  const [count, setCount] = useState(initialCount || 1);

  const handleIncrement = () => {
    if (count < maxCount) {
      const newCount = count + 1;
      setCount(newCount);
      onCountChange && onCountChange(newCount);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      const newCount = count - 1;
      setCount(newCount);
      onCountChange && onCountChange(newCount);
    }
  };

  const handleInputChange = (event) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value) && value >= 1 && value <= maxCount) {
      setCount(value);
      onCountChange && onCountChange(value);
    }
  };

  return (
    <div>
      <button className="product-count" onClick={handleDecrement}>-</button>
      <span>{count}</span>
      <button className="product-count" onClick={handleIncrement}>+</button>
    </div>
  );
};

export default Count;