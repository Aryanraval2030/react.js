import { useState } from 'react'
import './App.css'

function App() {


  const allData = {
    name: "",
    userName: "",
    password: ""
  }

  const [data, setdata] = useState(allData)

  function handle(e) {

    e.preventDefault()

    const { name, value } = e.target

    setdata(prev => ({
      ...prev,
      [name]: value
    }))
  }

  function handleReload() {
    localStorage.setItem("userdata", JSON.stringify(data))
    // setdata(allData)


    
  }


  return (
    <>
      <div className='h-[100vh] flex justify-center items-center w-[100%]'>
        <form action="" onSubmit={handleReload} className=' flex flex-col gap-5 items-center border-2 border-black p-10 rounded-2xl'>
          <input name="name" value={data.name} onChange={handle} type="text" placeholder='Enter your nickname' className='border-2 border-black w-[60vmin] sm:text-xl text-[13px] outline-none rounded-md pl-1 p-1' />
          <input name="userName" value={data.userName} onChange={handle} type="text" placeholder='Enter your username' className='border-2 border-black w-[60vmin] sm:text-xl text-[13px] outline-none rounded-md pl-1 p-1' />
          <input name="password" value={data.password} onChange={handle} type="password" placeholder='Enter password' className='border-2 border-black w-[60vmin] sm:text-xl text-[13px] outline-none rounded-md pl-1 p-1' />
          <button className='border-2 bg-red-600 text-zinc-50 w-[140px] p-2 rounded-xl'>click</button>
        </form>
      </div>
    </>
  )
}

export default App
