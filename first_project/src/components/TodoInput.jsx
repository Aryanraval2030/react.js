import React from 'react'

function TodoInput() {

  // JavaScript

  return (
    <div>
      <div className="container mx-auto px-4 my-12">

        <div className="border rounded-lg p-6 w-full max-w-md text-slate-950">


          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Enter your username"
              className="flex-1 border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <button type='submit' className="btn rounded-md bg-indigo-600 px-5 py-2 text-white hover:bg-indigo-700 transition">
              Start
            </button>
          </div>

        </div>
      </div>


    </div>
  )
}

export default TodoInput
