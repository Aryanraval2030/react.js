import { useState } from "react";
import "./App.css";

function App() {
  const [searchterm, setSearchterm] = useState("");

  const array = [
    "Aryan",
    "Rohit",
    "vikaram",
    "yogesh",
    "naitik",
    "duggu",
    "mishu",
  ];

  const changeInput = (i) => {
    setSearchterm(i.target.value);
  };

  const filternames = array.filter((num) => {
    return searchterm !== "" && num.toLowerCase().includes(searchterm.toLowerCase());
  });

  return (
    <>
      <div className="flex flex-col h-[100vh] w-[100%] justify-center items-center text-2xl">
        <input
          type="text"
          placeholder="type something here..."
          value={searchterm}
          onChange={changeInput}
          className="h-[50px] w-[350px] border-2 border-black pl-2 rounded-lg"
        />

        {filternames.map((name, idx) => {
          return <p key={idx}>{name}</p>;
        })}
      </div>
    </>
  );
}

export default App;
