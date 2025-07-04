import { useState, useEffect } from 'react'
import './App.css'
import Board from './components/Board'
import Controls from './components/Controls'
import Status from './components/Status'
import calculateWinner from './utils/calculateWinner'



function App() {
  const [size, setSize] = useState(3)          
  const [winLen, setWinLen] = useState(3)      
  const [board, setBoard] = useState(Array(size * size).fill(null))
  const [xIsNext, setXIsNext] = useState(true)
  const [winner, setWinner] = useState(null)

  useEffect(() => {
    setBoard(Array(size * size).fill(null))
    setXIsNext(true)
    setWinner(null)
  }, [size, winLen])

  const handleClick = (index) => {
    if (board[index] || winner) return 
    const newBoard = board.slice()
    newBoard[index] = xIsNext ? 'X' : 'O'
    const maybeWinner = calculateWinner(newBoard, size, winLen)
    setBoard(newBoard)
    if (maybeWinner) {
      setWinner(maybeWinner)
    } else if (!newBoard.includes(null)) {
      setWinner('Draw')
    } else {
      setXIsNext(!xIsNext)
    }
  }

  const handleReset = () => {
    setBoard(Array(size * size).fill(null))
    setXIsNext(true)
    setWinner(null)
  }



  const updateSize = (e) => {
    const val = Math.max(3, Math.min(10, Number(e.target.value)))
    setSize(val)
    if (winLen > val) setWinLen(val) 
  }

  const updateWinLen = (e) => {
    const val = Math.max(3, Math.min(size, Number(e.target.value)))
    setWinLen(val)
  }

  return (
    <div className="game-container">
      <h1>Advanced Tic-Tac-Toe</h1>

      <Controls
        size={size}
        winLen={winLen}
        updateSize={updateSize}
        updateWinLen={updateWinLen}
        onReset={handleReset}
      />

      <Status winner={winner} xIsNext={xIsNext} />

      <Board board={board} size={size} onSquareClick={handleClick} />
    </div>
  )
}

export default App
