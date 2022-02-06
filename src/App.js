import React, { useEffect, useState } from 'react';
import './style.css';

export default function App() {
  const [count, setCount] = useState(0);
  const [second, setSecond] = useState(0);
  useEffect(() => {
    if (count > 10) {
      setSecond(0);
    } else {
      setSecond(count * 2);
    }
  }, [count]);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>first counter</h1>
      <h1>{count}</h1>
      <h1>second counter</h1>
      <h1>{second}</h1>
      <button onClick={handleClick}>Add</button>
    </div>
  );
}
