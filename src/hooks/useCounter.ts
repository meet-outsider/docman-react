import { useState } from 'react';

export function useCounter(initialValue = 0): [number, () => void] {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(count + 1);
  };

  return [count, increment];
}
