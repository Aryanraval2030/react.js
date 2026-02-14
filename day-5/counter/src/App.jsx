import { useState } from 'react'
import './App.css'

function App() {

  const [count, setcount] = useState(0)

  const addcount = () => {
    setcount(count + 1)
  }
  const unaddcount = () => {
    setcount(count - 1)
  }
  const reset = () => {
    setcount(0)
  }

  return (
    <div>
      <div className='container'>
        <h1>number counter</h1>
        <div className='round'>{count}</div>
        <div className='btn'>
          <button className='add' onClick={addcount}>add</button>
          <button className='reset' onClick={reset}>reset</button>
          <button className='unadd' onClick={unaddcount}>unadd</button>
        </div>
      </div>
    </div>
  )
}

export default App
