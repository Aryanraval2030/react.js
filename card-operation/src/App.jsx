import { useState } from "react";
import "./App.css";

function App() {
  const [userName, setName] = useState("");
  const [email, setEmail] = useState("");

  const emailUpdate = (e) => {
    setEmail(e.target.value);
  };

  const nameUpdate = (e) => {
    setName(e.target.value);
  };

  const changer = (e) => {
    const userData = {
      username: userName,
      usermail: email,
    };
    e.preventDefault();
    localStorage.setItem("userdata", JSON.stringify(userData));
    alert("data save successfully!");

    
    setTimeout(() => {
      localStorage.removeItem("userdata");
      alert("Data removed from localStorage!");
    }, 5000);
  };

  return (
    <div className="main-bg flex items-center justify-center min-h-screen">
      <div className="bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-8 w-80">
        <h2 className="text-2xl font-bold text-center mb-6">
          Enter Username or Email
        </h2>

        <form onSubmit={changer}>
          <input required
            type="text"
            value={userName}
            onChange={nameUpdate}
            placeholder="Enter Your Username"
            className="w-full border border-gray-300 rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input required
            type="text"
            value={email}
            onChange={emailUpdate}
            placeholder="Enter Your Email"
            className="w-full border border-gray-300 rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Submit
          </button>

            <button
            type="submit"
            className="w-full bg-blue-500 mt-6 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            get data 
          </button>
        </form>
      </div>
      
    </div>
  );
}

export default App;
