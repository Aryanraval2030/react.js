import { useMemo, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState("");
  const [theme, setTheme] = useState("light");

  const fecto = useMemo(() => {
    console.log("this is a runing...");
    const num = Number(count);
    if (num < 0) return "this is a not valid";
    function fectorial(count) {
      if (count === 0 || count === 1) {
        return 1;
      }
      return count * count;
    }

    return fectorial(num);
  }, [count]);

  return (
    <div
      className={`h-[100vh] w-[100vw] flex justify-center flex-col items-center text-2xl font-serif ${theme === "light" ? "bg-black text-white" : "bg-white text-black"}`}
    >
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(e.target.value)}
        placeholder="enter any number for fectorial.."
        className={`border-2 rounded-md border-black outline-none h-[50px] w-[400px] pl-[5px] pr-[5px] ${theme === "light" ? "bg-black text-white border-white" : "bg-white text-black border-black"}`}
      />

      <p>
        this is a {count} fectorial is {fecto}
      </p>
      <button
        onClick={() => setTheme((pre) => (pre === "light" ? "dark" : "light"))}
        className="border-2 border-black py-[10px] px-[20px] rounded-md mt-[30vh]"
      >
        this's a {theme} theme
      </button>
    </div>
  );
}

export default App;
