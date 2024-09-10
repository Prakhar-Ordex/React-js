import { useState } from 'react';
import './App.css';

function App() {
  const [size, setSize] = useState(4); // Default board size is 3x3
  const [data, setData] = useState(Array(size * size).fill(null));
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const [winner, setWinner] = useState(null);

  const reset = () => {
    setData(Array(size * size).fill(null));
    setCount(0);
    setWinner(null);
    setLock(false);
  };

  const toggle = (index) => {
    if (data[index] || lock) return;
    
    const newData = [...data];
    newData[index] = count % 2 === 0 ? 'X' : '0';
    setData(newData);
    setCount(count + 1);

    if (checkWin(newData, size)) {
      setLock(true);
      setWinner(count % 2 === 0 ? 'X' : '0');
    } else if (!newData.includes(null)) {
      setLock(true);
    }
  };

  const checkWin = (data, size) => {
    const winningCombos = [];

    // Horizontal wins
    for (let i = 0; i < size; i++) {
      winningCombos.push([...Array(size).keys()].map(j => i * size + j));
    }

    // Vertical wins
    for (let i = 0; i < size; i++) {
      winningCombos.push([...Array(size).keys()].map(j => i + j * size));
    }

    // Diagonal wins
    winningCombos.push([...Array(size).keys()].map(i => i * (size + 1))); // Top-left to bottom-right
    winningCombos.push([...Array(size).keys()].map(i => (i + 1) * (size - 1))); // Top-right to bottom-left

    return winningCombos.some(combo => {
      const first = data[combo[0]];
      return first && combo.every(index => data[index] === first);
    });
  };

  const handleSizeChange = (event) => {
    const newSize = parseInt(event.target.value);
    setSize(newSize);
    setData(Array(newSize * newSize).fill(null));
    reset();
  };

  return (
    <div className='main'>
      <h1>Tic Tac Toe</h1>
      <div>
        <label htmlFor="size">Board Size: </label>
        <input 
          type="number" 
          id="size" 
          min="3" 
          value={size} 
          onChange={handleSizeChange} 
        />
      </div>
      <div className='board' style={{ gridTemplateColumns: `repeat(${size}, 1fr)` }}>
        {data.map((value, index) => (
          <div
            key={index}
            className='box'
            onClick={() => toggle(index)}
          >
            {value === 'X' && <h1>X</h1>}
            {value === '0' && <h1>0</h1>}
          </div>
        ))}
        <button onClick={reset}>Reset</button>
      </div>
      {winner && <h2>Player {winner} Wins!</h2>}
      {count === data.length && !winner && <h2>It's a Tie!</h2>}
    </div>
  );
}

export default App;
  