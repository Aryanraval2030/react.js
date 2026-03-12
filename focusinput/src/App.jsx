import { useEffect, useRef } from "react";

function App() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="bg-[black] h-[100vh] w-[100vw]">
      <div className="w-[100vw] flex justify-center pt-[20vh] mb-[20vh]">
        <h1 className="text-5xl text-white">my site</h1>
      </div>{" "}
      <div className=" text-black flex justify-center text-xl items-center gap-[20px]">
        <input
          type="text"
          ref={inputRef}
          placeholder="enter somthing"
          className="h-[50px] w-[500px] outline-none rounded-xl pl-3"
        />
        <button className="bg-white text-black py-[13px] rounded-xl px-[50px]">
          here
        </button>
      </div>
    </div>
  );
}

export default App;
