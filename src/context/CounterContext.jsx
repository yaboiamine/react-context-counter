import { createContext, useState } from 'react';

export const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  // Add increment & decrement Logic here

  return (
    /* Should look like this */
    /* <CounterContext.Provider value={{ count, increment, decrement }}> */
    <CounterContext.Provider value={{ count }}>
      {children}
    </CounterContext.Provider>
  );
};
