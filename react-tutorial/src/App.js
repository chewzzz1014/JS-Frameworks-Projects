import './App.css';
import Square from './components/Square';
import { useState } from 'react';

export default function Board() {

  // each represents a square
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)

  function handleClick(i) {
    const newSq = squares.slice()

    // if the square is ady occupied, do nothing
    if (squares[i])
      return

    // else, update the value in the square based on the current playrt
    newSq[i] = xIsNext ? 'X' : 'O'
    setSquares(newSq)
    setXIsNext(!xIsNext)
  }

  return (
    <div className="App">
      <div className="board-row">
        <Square
          key='1'
          value={squares[0]}
          onSquareClick={() => handleClick(0)}
        />
        <Square
          key='2'
          value={squares[1]}
          onSquareClick={() => handleClick(1)}
        />
        <Square
          key='3'
          value={squares[2]}
          onSquareClick={() => handleClick(2)}
        />
      </div>
      <div className="board-row">
        <Square
          key='4'
          value={squares[3]}
          onSquareClick={() => handleClick(3)}
        />
        <Square
          key='5'
          value={squares[4]}
          onSquareClick={() => handleClick(4)}
        />
        <Square
          key='6'
          value={squares[5]}
          onSquareClick={() => handleClick(5)}
        />
      </div>
      <div className="board-row">
        <Square
          key='7'
          value={squares[6]}
          onSquareClick={() => handleClick(6)}
        />
        <Square
          key='8'
          value={squares[7]}
          onSquareClick={() => handleClick(7)}
        />
        <Square
          key='9'
          value={squares[8]}
          onSquareClick={() => handleClick(8)}
        />
      </div>
    </div>
  );
}
