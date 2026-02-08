
function App() {

  let entered = (values) => {
    console.log(values.target.value)
  }

``
  return (

    <div>
      <input onChange={entered} type="text" placeholder="Enter a string..." />
    </div>
  )
}

export default App
