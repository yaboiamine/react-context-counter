import CounterDisplay from './components/CounterDisplay';
import CounterControls from './components/CounterControls';
import { CounterProvider } from './context/CounterContext';
import './App.css'

function App() {

  return (
    <>
    <CounterProvider>
      <h1>React Global Counter</h1>
      <CounterDisplay />
      <CounterControls />
    </CounterProvider>
    </>
  )
}

export default App
