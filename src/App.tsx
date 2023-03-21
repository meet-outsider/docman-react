// import  {useState} from 'react';
// import reactLogo from './assets/react.svg';
import '@/styles/App.css';
// import {getUser} from '@/api/user';
import Layout from '@/layout/Layout';

function App() {
  // const [msg, fetchMsg] = useState('unKnow');
  //
  // const fetchData = async () => {
  //   const response = await getUser();
  //   const {message}: any = await response.data;
  //   fetchMsg(message);
  // };
  // const children = (
  //     <>
  //       <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
  //         <img src="/vite.svg" className="logo" alt="Vite logo"/>
  //       </a>
  //       <a href="https://reactjs.org" target="_blank" rel="noreferrer">
  //         <img src={reactLogo} className="logo react" alt="React logo"/>
  //       </a>
  //       <button onClick={() => fetchData()}>click</button>
  //       <h2>{msg}</h2>
  //       <h1>todolist:nothing</h1>
  //     </>
  // )
  return (
    <div className="App">
      <div>
        <Layout />
      </div>
    </div>
  );
}

export default App;
