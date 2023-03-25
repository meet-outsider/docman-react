import React, {useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom';

function Counter() {
  const location = useLocation();
  const [count, setCount] = useState(0);

  // 当 URL 发生变化时，检查之前是否访问过这个页面，如果是，则从本地存储中恢复之前的状态
  useEffect(() => {
    const previousLocation = localStorage.getItem('previousLocation');
    console.log('previousLocation', previousLocation)
    if (previousLocation === location.pathname) {
      const previousCount = localStorage.getItem('previousCount');
      console.log("之前访问过 之前的值是",previousCount)
      if (previousCount !== null) {
        setCount(parseInt(previousCount));
      }
    }
    localStorage.setItem('previousLocation', location.pathname);
  }, [location.pathname]);

  // 在组件状态发生变化时，将当前状态存储到本地存储中
  useEffect(() => {
    // console.log('在组件状态发生变化时，将当前状态存储到本地存储中 count', count)
    // @ts-ignore
    localStorage.setItem('previousCount', count);
  }, [count]);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
      <div>
        <h1>Counter: {count}</h1>
        <button onClick={incrementCount}>Increment</button>
      </div>
  );
}

export default Counter;
