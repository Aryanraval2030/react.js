import { useState } from "react"

function Sign() {

    const [mail, setMail] = useState("")
    const [fullName, setFullName] = useState("")
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [showAlert, setShowAlert] = useState(false)

    function form(e) {
        e.preventDefault()

        const Data = {
            mail,
            fullName,
            userName,
            password
        }

        localStorage.setItem("userdata", JSON.stringify(Data))

        setShowAlert(true)


        setTimeout(() => {
            setShowAlert(false)
        }, 3000)

        setMail("")
        setFullName("")
        setUserName("")
        setPassword("")
    }

    return (
        <div >
            <div className="min-h-screen w-full flex justify-center items-center p-10 bg-gray-100">

                <div className="shadow-lg w-[400px] text-center px-6 py-6 rounded-md border border-blue-200 bg-white">

                    <div className="text-center">
                        <p className="text-2xl font-semibold">INSTAGRAM</p>
                        <p className="text-[rgba(0,0,0,0.7)] my-3">
                            Sign up to see photos and videos <br /> from your friends.
                        </p>
                    </div>

                    <p className="my-3 text-gray-500">OR</p>

                    <form onSubmit={form} className="flex flex-col gap-4">

                        <input
                            type="email"
                            value={mail}
                            onChange={(e) => setMail(e.target.value)}
                            placeholder="Enter your email"
                            className="border-2 outline-none pl-2 rounded-sm h-9"
                            required
                        />

                        <input
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder="Enter your name"
                            className="border-2 outline-none pl-2 rounded-sm h-9"
                            required
                        />

                        <input
                            type="text"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            placeholder="Enter your username"
                            className="border-2 outline-none pl-2 rounded-sm h-9"
                            required
                        />

                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="border-2 outline-none pl-2 rounded-sm h-9"
                            required
                        />

                        <button
                            type="submit"
                            className="bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 h-9 rounded-lg text-white font-semibold"
                        >
                            Sign Up
                        </button>

                    </form>

                    <p className="text-[rgba(0,0,0,0.7)] my-4 text-sm">
                        By signing up, you agree to our terms, data policy and cookies policy.
                    </p>

                </div>
            </div>

            {showAlert && (
                <div className="fixed inset-0 flex justify-center items-center bg-black/50 z-50">

                    <div className="bg-white w-[350px] p-6 rounded-2xl text-center shadow-2xl">

                        <h2 className="text-2xl font-bold text-green-600">
                            🎉 Signup Successful!
                        </h2>

                        <p className="text-gray-600 mt-3">
                            Welcome to Instagram 🚀
                        </p>

                    </div>

                </div>
            )}

        </div>
    )
}

export default Sign