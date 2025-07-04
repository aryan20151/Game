import React from 'react'

function Status({ winner, xIsNext }) {
  const text = winner
    ? winner === 'Draw'
      ? 'Game ended in a draw.'
      : `Winner: ${winner}`
    : `Turn: ${xIsNext ? 'X' : 'O'}`
  return <div className="status">{text}</div>
}

export default Status
