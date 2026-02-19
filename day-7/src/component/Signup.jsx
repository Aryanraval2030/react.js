import { useState } from "react"

function Signup() {

  const [mail, setMail] = useState("")
  const [fullName, setFullName] = useState("")
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")

  const getMail = (ml) => {
    setMail(ml.target.value)
    console.log(setMail)
    setFullName(ml.target.value)
    console.log(setFullName)
    setUserName(ml.target.value)
    console.log(setUserName)
    setPassword(ml.target.value)
    console.log(setPassword)
  }

  function form(e) {
    e.preventDefault()
  }


  return (
    <div>

      <div className="min-h-screen w-full flex justify-center items-center p-10">

        <div className="shadow-lg h-auto shadow-indigo-500/40 w-[400px] text-center px-6 py-2 hover:shadow-blue-700/80 rounded-md border border-blue-200">

          <div className="text-center">
            <p className="text-2xl">INSTAGRAM</p>
            <p className="text-[rgba(0,0,0,0.7)] my-3">sign up to see photos and video <br /> from your friends.</p>
            <button className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-8 rounded-sm w-full"><a href="">log in with facebook</a></button>
          </div>

          <p className="my-3">OR</p>

          <div className="">
            <form action="" onClick={form} className="flex flex-col gap-4">
              <input value={mail} className="border-2 outline-none block border-[rgba(0,0,0,0.5)] pl-1 rounded-sm h-8" type="mail" placeholder="enter your email" />
              <input value={fullName} className="border-2 outline-none block border-[rgba(0,0,0,0.5)] pl-1 rounded-sm h-8" type="fullname" placeholder="enter your name" />
              <input value={userName} className="border-2 outline-none block border-[rgba(0,0,0,0.5)] pl-1 rounded-sm h-8" type="username" placeholder="enter your username" />
              <input value={password} className="border-2 outline-none block border-[rgba(0,0,0,0.5)] pl-1 rounded-sm h-8" type="password" placeholder="enter your password" />

              <button className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-8 rounded-2xl" onClick={getMail}> sign up</button>
            </form>
          </div>

          <p className="text-[rgba(0,0,0,0.7)] my-3">be signing up. you agree to our <br /> terms. data policy and cookies policy.</p>
          <p className="mt-10">have an account ? <a href="" className="text-blue-800">log in</a></p>

        </div>
      </div>
    </div>
  )
}

export default Signup
