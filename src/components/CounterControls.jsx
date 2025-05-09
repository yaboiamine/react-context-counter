import { useContext } from 'react';
import { CounterContext } from '../context/CounterContext.jsx';

const CounterControls = () => {
  // Should Add useContext for increment, decrement here...
  const {count, setCount, increment, decrement} = useContext(CounterContext);

  console.log("counterContext default value: ",  count );

  

  return (
    <>
      <button onClick={increment} >Increment</button>
      <button disabled={count<=0?true:false} onClick={decrement}>Decrement</button>
      <button onClick={ ()=> setCount(0)}>Reset</button>
    </>
  );
};

export default CounterControls;
