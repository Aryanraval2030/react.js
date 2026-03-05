import { useState } from "react";
import "./App.css";

function App() {
  const [userName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [handleGet, setHandleGet] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // modal state

  const emailUpdate = (e) => setEmail(e.target.value);
  const nameUpdate = (e) => setName(e.target.value);

  const changer = (e) => {
    e.preventDefault();
    const userData = { username: userName, usermail: email };
    localStorage.setItem("userdata", JSON.stringify(userData));
    alert("Data saved successfully!");
  };

  const getData = () => {
    const get = localStorage.getItem("userdata");
    if (get) {
      setHandleGet(JSON.parse(get));
      setIsModalOpen(true); // open modal
    } else {
      setHandleGet(null);
      alert("No data in localStorage!");
    }
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="main-bg flex items-center justify-center flex-col min-h-screen p-4">
      <h1 className="text-white font-bold mb-5 text-5xl">CRUD Operation</h1>

      <div className="bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-8 w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6">Login System</h2>

        <form onSubmit={changer}>
          <input
            required
            type="text"
            value={userName}
            onChange={nameUpdate}
            placeholder="Enter Your Username"
            className="w-full border rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 border-black focus:ring-blue-500"
          />

          <input
            required
            type="text"
            value={email}
            onChange={emailUpdate}
            placeholder="Enter Your Email"
            className="w-full border border-black rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>

        <button
          onClick={getData}
          className="w-full bg-green-500 mt-4 text-white py-2 rounded-lg hover:bg-green-600 transition"
        >
          Get Data
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && handleGet && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-sm relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 font-bold text-xl"
            >
              &times;
            </button>

            <h3 className="text-xl font-bold mb-4">User Data</h3>
            <p className="mb-2">
              <span className="font-semibold">Username:</span> {handleGet.username}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Email:</span> {handleGet.usermail}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;