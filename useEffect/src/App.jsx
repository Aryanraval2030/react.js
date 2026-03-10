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
        <div key={items.id}>
          <p>{items.id}</p>;
          <p>{items.title}</p>;
          <p>{items.price}</p>;
        </div>
       )
      })}
    </>
  );
}

export default App;
