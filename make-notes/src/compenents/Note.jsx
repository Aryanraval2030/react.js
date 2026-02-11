import { useState } from "react"

function Note() {

    const [input, setInput] = useState('')
    const [textarea, setTextarea] = useState('')

    const inputTipes = (e) => {
        setInput(e.target.value)
    }

    const textareaTipes = (e) => {
        setTextarea(e.target.value)
    }

    const [task, setTask] = useState([])

    const formHandler = (e) => {
        e.preventDefault()

        if (input.trim() === '' && textarea.trim() === '') {
            return
        }


        const copyData = [...task]
        copyData.push({ input, textarea })

        setTask(copyData)
        console.log(copyData)

        setInput('')
        setTextarea('')
    }





    return (
        <div>
            <div className="w-full h-[100vh] p-[20px] md:flex gap-1">

                <div className="md:w-full p-10">
                    <h1 className="text-4xl text-white mb-8">add your task</h1>
                    <form className="flex flex-col gap-3" onSubmit={formHandler}>
                        <input type="text"
                            className="border-2 border-[#666] bg-black text-white p-3 rounded-lg outline-none transition"
                            placeholder="Enter Your Info Title..."
                            value={input}
                            onChange={inputTipes}
                        />

                        <textarea
                            className="border-2 border-[#666] bg-black text-white p-3 h-24 rounded-lg outline-none transition"
                            placeholder="Enter description..."
                            value={textarea}
                            onChange={textareaTipes}
                        >
                        </textarea>

                        <button className="border-2 border-[#666] text-white h-10 rounded-lg hover:bg-white hover:text-black transition active:scale-95">
                            Add
                        </button>

                    </form>

                </div>

                <div className="md:w-full p-10 border-l-2 flex items-start flex-wrap">
                    <h1 className="text-4xl text-white mb-8 w-full">your notes</h1>

                    {task.map(function (data) {
                        return <div className="bg-white rounded-lg min-h-[200px] w-[170px] p-2 m-1">
                            <h1 className="text-black font-bold text-xl">{data.input}</h1>
                            <p className="text-[#777] font-normal">{data.textarea}</p>
                        </div>

                    })}

                </div>
            </div>

        </div>
    )
}

export default Note
