import './App.css'


function App() {

  const pageScrolling = (elem) => {
  }



  return (

    <div onWheel={(elem) => {
      pageScrolling(elem.deltaY)
    }}>
      <div className='box1'></div>
      <div className='box2'></div>
      <div className='box3'></div>
    </div>
  )
}

export default App
