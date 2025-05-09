import { createContext, useState } from 'react';

export const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  // Add increment & decrement Logic here

  //I'm not sure why the state value is "delayed" by 1 whenever it updates.. (whenever I increment or decrement, it updates the counter on the page correctly, however, the console.log displays the state value just before the actual updated value).

  const increment = () => {
    setCount(prevCount => prevCount + 1 );
    console.log("increment: ", count);
  }

  const decrement = () => {
    setCount(prevCount => prevCount - 1 );
    console.log("decrement: ", count);
  }

  return (
    /* Should look like this */
    /* <CounterContext.Provider value={{ count, increment, decrement }}> */
    <CounterContext.Provider value={{ count, setCount, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};
