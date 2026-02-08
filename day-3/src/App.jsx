import './App.css'


function App() {



  const mousemove = (elem) => {
    console.log(elem.clientX)
    console.log(elem.clientY)
  }
  return (

    <div>
      <div onMouseMove={mousemove} className='box'></div>
    </div>
  )
}

export default App
