// import  {useState} from 'react';
// import reactLogo from './assets/react.svg';
import '@/app/styles/App.css';
import React, { useState, useEffect } from 'react';

import Layout from '@/layout/Layout';
import { useDispatch } from 'react-redux';
import { openAlert } from './features/alert/alertSlice';

export default function App() {
  return (
    <div className="App">
      <div>
        <Layout />
      </div>
    </div>
  );
}


export const Example: React.FC = () => {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    console.log(data);
  };
  // useMemo(fetchData,[count])
  useEffect(() => {
    // 模拟从后台获取数据
    fetchData();
  }, []);
  const handlerAlert = () => {
    dispatch(openAlert('nothing todo !just notify you'));
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => {
        setCount(count + 1);
        fetchData()
      }
      }>
        Click me
      </button>

      <button onClick={handlerAlert}>alert</button>
    </div>
  );
}

