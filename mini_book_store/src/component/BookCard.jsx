import { useState } from "react"
import Fiction from "./Fiction"
import Nonfiction from "./Nonfiction";
function BookCard() {


    const [bkFilter, setBkFilter] = useState(false)

    function showBook() {
        setBkFilter(prev => !prev)
    }


    return (
        <div>

            <div className="h-full p-5 text-center">
                <h1 className="font-semibold text-2xl mb-2">mini book store</h1>
                <button className="py-2 px-4 border border-black my-4" onClick={showBook}>
                    {bkFilter ? "Show Non-Fiction Book" : "Show Fiction Book"}
                </button>
                <h1 className="font-semibold text-2xl mb-2">{bkFilter ? "Fiction Books" : "Non-Fiction Book"}</h1>


                <div onClick={showBook} className="flex justify-evenly">
                    {bkFilter ? <Fiction /> : <Nonfiction />}
                </div>
            </div>

        </div>
    )
}

export default BookCard
