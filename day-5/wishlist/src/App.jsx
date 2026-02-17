import './App.css'
import { Heart } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { useState } from 'react';




function App() {

  const [toCart, addToCart] = useState(0)
  const [heart, addHeart] = useState(0)

  const addCarts = () => {
    addToCart(toCart + 1)
  }
  const likes = () => {
    addHeart(heart + 1)
  }

  return (
    <div>

      <div className='border-black w-[600px] m-6 px-2 py-6'>

        <div className='w-full h-[fit-content] flex justify-between mb-7'>
          <div className='flex gap-1'>
            <p><ChevronLeft /></p>
            <p>back to</p>
          </div>
          <div className='flex gap-6'>

            <div className='relative cursor-pointer'><Heart />
              {heart > 0 && (
                <span className='absolute -top-2 -right-3 bg-red-800 text-xs flex justify-center rounded-full w-4 h-4'>
                  {heart}
                </span>
              )}</div>

            <div className='relative cursor-pointer'> <ShoppingCart />
              {toCart > 0 && (
                <span className='absolute -right-3 -top-2 bg-red-800 text-xs flex justify-center rounded-full w-4 h-4'>{toCart}</span>
              )}
            </div>


          </div>
        </div>


        <div className=' w-full h-[fit-content] flex'>
          <div className='w-2/4 '>
            <img className='w-full h-full object-contain' src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEwL3Jhd3BpeGVsX29mZmljZV8zMl9waG90b19vZl9hX3BsYW50X2luX2hvbWVfaXNvbGF0ZWRfb25fd2hpdGVfYl83YmViOTc1OC0wYjJlLTQzYmUtYWYxZi03YjljODA3ZjI3MzRfMS5wbmc.png" alt="" />

          </div>
          <div className='w-2/4 mt-14'>
            <h1>classic leace lily</h1>
            <h5>populer house plant</h5>
            <h1>$18</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              quaerat magnam modi sit eius. Cumque porro a placeat ad!</p>

            <button className='border border-black rounded-md p-1 mt-9' onClick={addCarts}>about to cart</button>
            <button className='border border-black rounded-md p-1 mx-1 mt-9' onClick={likes}>wishlist</button>
          </div>
        </div>

      </div>

    </div>
  )
}

export default App
