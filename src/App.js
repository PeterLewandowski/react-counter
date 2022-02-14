import { useState, useEffect } from "react";
import "./App.css";
import Coffees from "./Coffees";

function App() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    setCounter(500)}, [])
  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter: {counter}</h1>
        <button onClick={() => setCounter(counter + 1)}> +</button>
        <button onClick={() => setCounter(counter - 1)}> -</button>
        <button onClick={() => setCounter(0)}> RESET</button>
        <Coffees />
      </header>
    </div>
  );
}

// add a reset and minus button

export default App;
