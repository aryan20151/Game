import React from 'react'

function Controls({ size, winLen, updateSize, updateWinLen, onReset }) {
  return (
    <div className="controls">
      <label>
        Board size N:
        <input
          type="number"
          min="3"
          max="10"
          value={size}
          onChange={updateSize}
        />
      </label>
      <label>
        Win length M:
        <input
          type="number"
          min="3"
          max={size}
          value={winLen}
          onChange={updateWinLen}
        />
      </label>
      <button onClick={onReset}>Reset</button>
    </div>
  )
}

export default Controls
