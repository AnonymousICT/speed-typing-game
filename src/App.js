import React, {useState, useEffect, useRef} from 'react';

function App() {
  const STARTING_TIME = 5 
  const [text, setText] = useState('')
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME)
  const [didGameStart, setDidGameStart] = useState(false)
  const [wordCount, setWordCount] = useState(0)
  const textBoxRef = useRef(null)

  function handleChange(e) {
    const {value} = e.target
    setText(value)
  }

  function calculateWordCount(text){
    const wordsArr = text.trim().split(" ")
    return wordsArr.filter(word => word !== "").length
  }

  function startGame() {
    setDidGameStart(true)
    setTimeRemaining(STARTING_TIME)
    setText("")
    textBoxRef.current.disabled = false
    textBoxRef.current.focus()
  }

  function endGame(){
    setDidGameStart(false)
    setWordCount(calculateWordCount(text)) 

  }

  useEffect(()=>{
    if(didGameStart && timeRemaining >0){
      setTimeout(()=>{
        setTimeRemaining(time => time -1)
      },1000)
    } else if(timeRemaining === 0) {
      endGame()
    }
  }, [timeRemaining, didGameStart])

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
