import React, { useState } from "react";
import Board from "./Board";

export default function Game() {

    const [xIsNext, setXIsNext] = useState(true)
    const [history, setHistory] = useState([Array(9).fill(null)])

    // last history
    const currentSquares = history[history.length - 1]

    // render a list of moves
    const moves = history.map((squares, move) => {
        let desc
        desc = move > 0 ? `Go to move # ${move}` : `Go to game start`

        return (
            <li>
                <button onClick={() => jumpTo(move)}>
                    {desc}
                </button>
            </li>
        )
    })

    function handlePlay(nextSquares) {
        setHistory([...history, nextSquares])
        setXIsNext(!xIsNext)
    }

    function jumpTo(nextMove) {

    }

    return (
        <div className="game">
            <div className="game-board">
                <Board
                    xIsNext={xIsNext}
                    squares={currentSquares}
                    onPlay={handlePlay}
                />
            </div>
            <div className="game-info">
                <ol>
                    {moves}
                </ol>
            </div>
        </div>
    )
}