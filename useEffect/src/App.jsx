import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [get, setGet] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show === true) {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => setGet(data))
        .catch((error) => console.log(error));
    }
  }, [show]);

  return (
    <>
      <button
        onClick={() => setShow(true)}
        className="border-2 border-black py-4 px-7 text-2xl rounded-xl mt-3"
      >
        call API
      </button>
      {get.map((items) =>  {
       return (
        <div key={items.id} className="border-2 border-black flex gap-2 py-2 my-2">
          <p>{`items id = ${items.id}`}</p>;
          <p>{`items title = ${items.title}`}</p>;
          <p>{`items price = ${items.price}`}</p>;
        </div>
       )
      })}
    </>
  );
}

export default App;
