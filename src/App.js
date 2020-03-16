import React, {useState} from 'react';

function App() {
  const [text, setText] = useState('')

  function handleChange(e) {
    const {value} = e.target
    setText(value)
  }

  function wordCount(text){
    const wordsArr = text.trim().split(" ")
    return wordsArr.filter(word => word !== "").length
  }

  return (
    <div className="App">
      <h1>Speed Typing Game</h1>
      <h4>How fast do you type?</h4>
      <textarea 
        onChange={handleChange}
        value={text}
      />
      <h4>Time remaining: </h4>
      <button onClick={()=> wordCount(text)}>Start</button>
      <h1>word count</h1>
    </div>
  );
}

export default App;
