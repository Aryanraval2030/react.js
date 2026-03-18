import { memo, useCallback, useState } from "react";

const Child = memo(({ task, dlt, index }) => {
  return (
    <>
      <div className="border-2 rounded-md px-3 py-2 text-white flex justify-between items-center">
        <span>{task}</span>
        <div className="flex gap-2">
          <button className="border px-2 rounded">Edit</button>
          <button className="border px-2 rounded" onClick={() => dlt(index)}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
});

function App() {
  const [input, setInput] = useState("");
  const [task, setTask] = useState([]);
  const [theme, setTheme] = useState("light");

  function changeTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  const add = useCallback(() => {
    if (input.trim() === "") return;

    setTask((currentTask) => [...currentTask, input]);
    setInput("");
  }, [input]);

  const dlt = useCallback((idx) => {
    setTask((prev) => prev.filter((_, ind) => ind !== idx));
  });
  return (
    <div
      className={`bg-black text-white h-[100vh] w-[10] flex justify-center items-center ${theme === "light" ? "bg-black text-white" : "bg-white  text-black"}`}
    >
      {/* Heading */}
      <div
        className={`w-[400px] rounded-lg p-5 flex flex-col gap-4 ${theme === "light" ? "bg-black text-white" : "bg-white  text-black"}`}
      >
        {/* Heading */}
        <h1 className="text-2xl font-bold text-center">Todo App</h1>

        {/* Input + Buttons */}
        <div className="flex flex-col gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter your task..."
            className={`border-2 rounded-md h-[55px] w-[100%] px-2 outline-none text-black ${theme === "light" ? "bg-black text-white" : "bg-white  text-black border-black"}`}
          />

          <div className="flex gap-2">
            <button
              className={`border-2 px-4 py-2 rounded-md ${theme === "light" ? "bg-white text-black" : "bg-black  text-white"}`}
              onClick={add}
            >
              Add
            </button>
          </div>
        </div>

        {/* Todo List UI */}
        <div className="flex flex-col gap-2 mt-3">
          {task.map((task, idx) => (
            <Child key={idx} task={task} index={idx} dlt={dlt} />
          ))}
          <button
            className={`border-2 border-white rounded-md py-[5px] text-2xl ${theme === "light" ? "bg-white text-black" : "bg-black  text-white"}`}
            onClick={changeTheme}
          >
            chage
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
