
function Signup() {
  return (
    <div>


      <div className="h-[100vh] w-full flex justify-center items-center p-4">
        <div className="border-2 border-black h-[450px] w-[400px] text-center p-2">

          <div className=" border text-center">
            <p>INSTAGRAM</p>
            <p>sign up to see photos and video <br /> from your friends.</p>
            <button><a href="">log in with facebook</a></button>
          </div>

          <p>OR</p>

          <div className=" border-2 border-b-primary">
            <form action="" className="flex flex-col gap-4">
              <input className="border-2 outline-none block border-[rgba(0,0,0,0.5)] pl-1 rounded-sm h-8" type="mail" placeholder="enter your email" />
              <input className="border-2 outline-none block border-[rgba(0,0,0,0.5)] pl-1 rounded-sm h-8" type="fullname" placeholder="enter your name" />
              <input className="border-2 outline-none block border-[rgba(0,0,0,0.5)] pl-1 rounded-sm h-8" type="username" placeholder="enter your username" />
              <input className="border-2 outline-none block border-[rgba(0,0,0,0.5)] pl-1 rounded-sm h-8" type="password" placeholder="enter your password" />

              <button className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-8 rounded-2xl"> sign up</button>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Signup
