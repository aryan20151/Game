import React from 'react';

function Controls({ size, winLen, updateSize, updateWinLen, onReset }) {
  const handleSizeChange = (delta) => {
    const newSize = size + delta;
    if (newSize >= 3 && newSize <= 10) {
      updateSize({ target: { value: newSize } });
    }
  };

  const handleWinLenChange = (delta) => {
    const newWinLen = winLen + delta;
    if (newWinLen >= 3 && newWinLen <= size) {
      updateWinLen({ target: { value: newWinLen } });
    }
  };

  return (
    <div className="controls">
      <div className="input-group">
        <label>Board size N:</label>
        <div className="custom-input">
          <button onClick={() => handleSizeChange(-1)}>-</button>
          <input type="number" value={size} readOnly />
          <button onClick={() => handleSizeChange(1)}>+</button>
        </div>
      </div>

      <div className="input-group">
        <label>Win length M:</label>
        <div className="custom-input">
          <button onClick={() => handleWinLenChange(-1)}>-</button>
          <input type="number" value={winLen} readOnly />
          <button onClick={() => handleWinLenChange(1)}>+</button>
        </div>
      </div>

      <button onClick={onReset}>Reset</button>
    </div>
  );
}

export default Controls;
