import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  // let counter = 5;
  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
      console.log('Value added',counter);
    }
    else {
      alert('Counter should not exceed 20')
    }

  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      console.log('removed value',counter);
    }
    else {
      alert('counter should not be less than 0')
    }
  }

  return (
    <>
      <h1>CHAI AUR REACT</h1>
      <h3>Counter Value : {counter}</h3>

      <button onClick={addValue}>Add Value</button> <br></br>
      <button onClick={removeValue}>Decrease Value</button>

    </>
  )
}

export default App
