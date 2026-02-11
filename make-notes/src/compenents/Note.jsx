import { useState } from "react"

function Note() {

    const [input, setInput] = useState('')

    const inputText = (task) => {
        console.log(task.target.value)
    }

    const formHandler = (e) => {
        e.preventDefault()
    }


    return (
        <div>
            <div className="w-full h-[100vh] p-[20px] flex gap-1">

                <div className="w-2/4  p-10">
                    <form className="flex flex-col gap-3" onSubmit={formHandler}>

                        <input type="text" className="border-2 border-[#666] bg-black text-white p-3 rounded-lg outline-none transition" placeholder="Enter Your Info Title..."
                            onChange={inputText}
                        />

                        <textarea className="border-2 border-[#666] bg-black text-white p-3 h-24 rounded-lg outline-none transition"
                            placeholder="Enter description...">
                        </textarea>

                        <button onClick={inputText} className="border-2 border-[#666] text-white h-10 rounded-lg hover:bg-white hover:text-black transition active:scale-95">
                            Add
                        </button>

                    </form>

                </div>
                <div className="w-2/4 p-10 border-l-2">
                    <div className="bg-white rounded-lg min-h-[150px] w-[120px]"></div>
                </div>
            </div>

        </div>
    )
}

export default Note
