import { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';
import SecondCounterDisplay from './SecondCounterDisplay';
import CounterControls from './CounterControls';
import { Navigate, useNavigate } from 'react-router-dom';

const CounterDisplay = () => {

  //const count  = 0; // Change this to use context like this useContext(CounterContext);

  const { count } = useContext(CounterContext);

  const navigate = useNavigate();

  return (
    <>
      <h1>React Global Counter</h1>
      <p>Current Count: {count}</p>
      <CounterControls />
      <button onClick={() => {
        console.log(`moved to second page!`);
        navigate("second-display");
      }}> click me to see something cool!</button>
    </>
  )
};

export default CounterDisplay;
