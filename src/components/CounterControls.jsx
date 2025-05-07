import { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';

const CounterControls = () => {
  // Should Add useContext for increment, decrement here...

  return (
    <>
      <button>Increment</button>
      <button>Decrement</button>
    </>
  );
};

export default CounterControls;
