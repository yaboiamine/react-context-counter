import CounterDisplay from './components/CounterDisplay';
import CounterControls from './components/CounterControls';
import { CounterProvider } from './context/CounterContext';
import './App.css'

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import SecondCounterDisplay from './components/SecondCounterDisplay';



function App() {

  return (
    <>
      
            <CounterProvider>

            <Router>
              <Routes>
              
                {/* <h1>React Global Counter</h1> */}
              
                <Route path='/' element={<CounterDisplay />} />
                {/* <CounterControls /> */}
                <Route path='second-display' element={<SecondCounterDisplay />} />
                
              </Routes>
            </Router>
          
            </CounterProvider>
          
          
    </>
  )
}

export default App
