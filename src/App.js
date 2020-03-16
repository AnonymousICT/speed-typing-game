import React, {useState, useEffect} from 'react';

function App() {
  const [text, setText] = useState('')
  const [timeRemaining, setTimeRemaining] = useState(5)
  const [didGameStart, setDidGameStart] = useState(false)

  function handleChange(e) {
    const {value} = e.target
    setText(value)
  }

  function wordCount(text){
    const wordsArr = text.trim().split(" ")
    return wordsArr.filter(word => word !== "").length
  }

  useEffect(()=>{
    if(didGameStart && timeRemaining >0){
      setTimeout(()=>{
        setTimeRemaining(time => time -1)
      },1000)
    } else if(timeRemaining === 0) {
      didGameStart(false)
    }
  }, [timeRemaining, didGameStart])

  return (
    <div className="App">
      <h1>Speed Typing Game</h1>
      <h4>How fast do you type?</h4>
      <textarea 
        onChange={handleChange}
        value={text}
      />
      <h4>Time remaining: {timeRemaining}</h4>
      <button onClick={()=> setDidGameStart(true)}>Start</button>
      <h1>word count</h1>
    </div>
  );
}

export default App;
