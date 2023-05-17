import { openAlert } from '@/features/alert/alertSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export default function CasbinPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('Component is mounted');
    return () => {
      console.log('Component is unmounted');
    };
  }, []);
  const handlerOpen = () => dispatch(openAlert('ss'));
  return (
    <div>
      <h1>Example</h1>
      <button onClick={handlerOpen}>open</button>
    </div>
  );
}
