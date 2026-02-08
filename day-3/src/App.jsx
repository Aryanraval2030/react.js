import { useState } from 'react'
import './App.css'


function App() {

  const [rightCount, incrementCount] = useState(0)

  function increment() {
    incrementCount(rightCount + 1)
  }


  function decrement() {
    incrementCount(rightCount - 1)
  }

  function jump() {
    incrementCount(rightCount + 5)
  }

  function jumpDecrement() {
    incrementCount(rightCount - 5)
  }

  return (

    <div>
      <h1>{rightCount}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>dicrement</button>
      <button onClick={jump}>jump by 5</button>
      <button onClick={jumpDecrement}>jump by -5</button>
    </div>
  )
}

export default App
