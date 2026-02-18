import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

function App() {

  const [data, setdata] = useState(1)
  const [api, setApi] = useState([])

  function show() {
    fetch(`http://localhost:3000/product?_page=${data}&_limit=2`)
      .then((res) => res.json())
      .then((dataApi) => setApi(dataApi))
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    show()
  }, [data])


  function pre() {
    setdata(data - 1)
  }
  function next() {
    setdata(data + 1)
  }


  return (
    <div>
      {
        api.map((datas) => {
          return (
            <>
              <div className='container'> <h1>{datas.id}</h1>
                <p>{datas.title}</p>
                <p>{datas.price}</p>
                <p>{datas.description}</p></div>
            </>
          )
        })
      }


      <button onClick={pre}>pre</button>
      {data}
      <button onClick={next}>next</button>

    </div>
  )
}

export default App
