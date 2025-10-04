/**
 * @description      :
 * @author           : DHANUSH
 * @group            :
 * @created          : 04/10/2025 - 12:28:44
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 04/10/2025
 * - Author          : DHANUSH
 * - Modification    :
 **/
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    setCount(count - 1);
  };
  return (
    <div className="App">
      <div className="content">
        <h1>Counter App</h1>
        <div>Count: {count}</div>

        <div className="actionButtons">
          <button className="incrementButton" onClick={() => incrementCount()}>
            Increment
          </button>
          <button className="decrementButton" onClick={() => decrementCount()}>
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
