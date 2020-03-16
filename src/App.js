import React from 'react';
import useGameLogic from "./useGameLogic"

function App() {
  const {
    textBoxRef, 
    handleChange, 
    text, 
    didGameStart, 
    timeRemaining, 
    startGame, 
    wordCount} 
    = useGameLogic(60)

  return (
    <div className="App">
      <h1>Speed Typing Game</h1>
      <h4>How fast do you type?</h4>
      <textarea 
        onChange={handleChange}
        value={text}
        disabled={!didGameStart}
        ref={textBoxRef}
      />
      <h4>Time remaining: {timeRemaining}</h4>
      <button 
        onClick={startGame}
        disabled={didGameStart}
      >Start</button>
      <h1>Word count: {wordCount}</h1>
    </div>
  );
}

export default App;
