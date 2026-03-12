import Hoc from "./Hoc";

function Counter({ count, increment, decrement }) {
  return (
    <>
    {count}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
}

const EnhancedCounter = Hoc(Counter);

function App() {
  return (
    <>
      <EnhancedCounter />
    </>
  );
}

export default App;
