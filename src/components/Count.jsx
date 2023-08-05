import React, { useState } from 'react';

const Count = ({ initialCount, onCountChange }) => {
  const [count, setCount] = useState(initialCount || 1);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
    onCountChange && onCountChange(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(prevCount => prevCount - 1);
      onCountChange && onCountChange(count - 1);
    }
  };

  return (
    <div>
      <button onClick={handleDecrement}>-</button>
      <span>{count}</span>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default Count;