import React from 'react';
import { useState } from 'react';

export function ComponentWithoutCache() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>计数器</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export function ComponentWithCache() {
  const [flag, setFlag] = useState(0)
  const count = 0;
  function increment() {
    console.log("click");
    setFlag(flag + 1)
    return count + 1
  }
  return (
    <div>
      <h2>缓存计数器</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
