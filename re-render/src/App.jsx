import { useRef, useState } from "react";

function App() {
  const [count1, setCount1] = useState(0);

  const refCount = useRef(0);
  const textRef = useRef(); // DOM ref

  const handle = () => {
    refCount.current = refCount.current + 1;
    textRef.current.innerText = refCount.current;
    console.log(refCount.current);
  };

  return (
    <div className="h-screen w-screen bg-black flex items-center justify-center">
      <div className="flex gap-10">

        {/* State Counter */}
        <div className="bg-zinc-900 text-white p-8 rounded-2xl flex flex-col items-center gap-6 w-[260px] border border-zinc-700">
          <h1 className="text-xl font-semibold text-blue-400">State Counter</h1>

          <p className="text-5xl font-bold">{count1}</p>

          <button
            className="bg-blue-500 px-6 py-2 rounded-lg"
            onClick={() => setCount1(count1 + 1)}
          >
            Increase State
          </button>
        </div>

        {/* Ref Counter */}
        <div className="bg-zinc-900 text-white p-8 rounded-2xl flex flex-col items-center gap-6 w-[260px] border border-zinc-700">
          <h1 className="text-xl font-semibold text-purple-400">Ref Counter</h1>

          <p className="text-5xl font-bold" ref={textRef}>0</p>

          <button
            className="bg-purple-500 px-6 py-2 rounded-lg"
            onClick={handle}
          >
            Increase Ref
          </button>

          <p className="text-sm text-gray-400">
            Ref value updates without re-render
          </p>
        </div>

      </div>
    </div>
  );
}

export default App;