import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter: {counter}</h1>
        <button onClick={() => setCounter(counter + 1)}> +</button>
        <button onClick={() => setCounter(counter - 1)}> -</button>
        <button onClick={() => setCounter(0)}> RESET</button>
      </header>
    </div>
  );
}

// add a reset and minus button

export default App;
