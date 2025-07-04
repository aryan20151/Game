import React from 'react'
import Square from './Square'
import '../App.css'

function Board({ board, size, onSquareClick }) {
  return (
    <div
      className="board"
      style={{ gridTemplateColumns: `repeat(${size}, 60px)` }}
    >
      {board.map((value, idx) => (
        <Square key={idx} value={value} onClick={() => onSquareClick(idx)} />
      ))}
    </div>
  )
}

export default Board
