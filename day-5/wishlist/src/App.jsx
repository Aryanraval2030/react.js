import './App.css'

function App() {

  return (
    <div>

      <div className='border-black w-[600px] m-6 px-2 py-6'>

        <div className='w-full h-[fit-content] flex justify-between mb-7'>
          <div className='flex gap-1'>
            <p>icon</p>
            <p>back to</p>
          </div>
          <p>icon</p>
        </div>

        <div className=' w-full h-[fit-content] flex'>
          <div className='w-2/4'>
          </div>
          <div className='w-2/4'>
            <h1>classic leace lily</h1>
            <h5>populer house plant</h5>
            <h1>$18</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              quaerat magnam modi sit eius. Cumque porro a placeat ad!</p>

            <button className='border border-black rounded-md p-1 mt-9'>about to cart</button>
            <button className='border border-black rounded-md p-1 mx-1 mt-9'>wishlist</button>
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default App
