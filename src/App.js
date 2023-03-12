import logo from './logo.svg';
import './App.css';
import Timer from "./Timer"
import NotTimer from "./NotTimer"
import { useState } from 'react';

function App() {
  const [showTimer, setShowTimer] = useState(true);

  function toggleTimer() {
    setShowTimer(curr => !curr);
  }

  return (
    <div id="App">
      <button id="App.toggle" onClick={toggleTimer}>Toggle</button>
      {showTimer && <Timer />}
      {!showTimer && <NotTimer />}
    </div>
  );
}

export default App;
