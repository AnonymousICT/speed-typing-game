import {useState, useEffect, useRef} from "react"
function useGameLogic(startingTime =10) { 

    const [text, setText] = useState('')
    const [timeRemaining, setTimeRemaining] = useState(startingTime)
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
    setTimeRemaining(startingTime)
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

  return {textBoxRef, handleChange, text, didGameStart, timeRemaining, startGame, wordCount}
}

export default useGameLogic