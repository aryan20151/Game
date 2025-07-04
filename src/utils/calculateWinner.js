export default function calculateWinner(board, size, winLen) {
  if (!board) return null
  const directions = [
    [0, 1],
    [1, 0], 
    [1, 1], 
    [1, -1], 
  ]

  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      const current = board[row * size + col]
      if (!current) continue
      for (const [dx, dy] of directions) {
        let count = 1
        let r = row + dx
        let c = col + dy
        while (
          r >= 0 &&
          r < size &&
          c >= 0 &&
          c < size &&
          board[r * size + c] === current
        ) {
          count += 1
          if (count === winLen) return current
          r += dx
          c += dy
        }
      }
    }
  }
  return null
}
