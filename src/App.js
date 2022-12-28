import React, { useState } from "react"
import "./App.css"
import Square from './components/Square'

const App = () => {

  // Variables below establish initial game state and rules for updating game on click events.
  // location if win/lose squares determined via random number generating function.
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ]) 
  const [treasureLocation, setTreasureLocation] = useState(
    Math.floor(Math.random() * board.length)
  )
  const [bombLocation, setBombLocation] = useState(
    Math.floor(Math.random() * board.length)
  )
  if (treasureLocation === bombLocation) {
    setBombLocation(Math.floor(Math.random() * board.length))
  }
  const [counter, setCounter] = useState(5)
  const minus = () => {
    setCounter(counter - 1)
    if (counter - 1 === 0) {
      setStatus("The spooky ghost got you, try again")
    }
  }
  const [status, setStatus] = useState (null)
  
  // Function designed for reset button, sets all game states back to original.
  const resetState = () => {
    setTreasureLocation(Math.floor(Math.random() * board.length))
    setBombLocation(Math.floor(Math.random() * board.length))
    setBoard(["?","?","?","?","?","?","?","?","?","?","?","?"])
    setCounter(5)
    setStatus(null)
  }

  const handleGamePlay = (index) => {
    // creates copy of board state allowing modification of single instance
    // Defines onclick values of each square dependent on board state.
    let updatedBoard = [...board]
      if (index === treasureLocation) {
      updatedBoard[index]="🍪"
      setBoard(updatedBoard)
      setStatus("TREAT OBTAINED!")
    } else if (index === bombLocation) {
      updatedBoard[index]="👻"
      setBoard(updatedBoard)
      setStatus("The spooky ghost got you, try again")
    } else {
      updatedBoard[index]="🌲"
      setBoard(updatedBoard)
  }
  }

  // Below is the display the user will see and interact with
  return (
    <>
    <div className="background">
      <h1>Treasure Hunt Game</h1>
      <p className="description">You have come to this haunted forest searching treasure. The treasure is a cookie. DO NOT ASK QUESTIONS. You find the cookie, you escape alive. You meet a spirit, or search for too long, and you join this place forever. Click question marks to search. Good luck.</p>
      <h4>Searches remaining:{counter}</h4>
      <h2>{status}</h2>
      <div className="gameboard">
      {board.map((value, index) => {
        return( <Square 
          value={value} 
          key={index} 
          index={index}
          handleGamePlay={handleGamePlay}
          minus={minus}
          status={status}
          counter={counter}
          />
      )
      })}
      </div>
      <br></br>
      <button className="reset" onClick={resetState}>Try again?</button>
    </div>
    </>
  )
}

export default App
