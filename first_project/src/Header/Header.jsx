import React from 'react'
import './Header.css'

function Header() {
  return (
    <div>

      {/* header */}

      <header className='bg-white/10 rounded-lg m-5 border border-b-2 border-black flex justify-between items-center px-5 py-4'>
        <nav className='flex items-center space-x-6'>
          <div>
            <img className='w-14 h-auto object-cover flex-shrink-0 ' src="./logo.png" alt="" />
          </div>

          <ul className='flex space-x-6 items-center'>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">Help</a></li>
          </ul>
        </nav>

        <div className='rounded-lg border-2 border-black px-5 py-2 flex items-center'>click</div>
      </header>


    </div>
  )
}


export default Header
