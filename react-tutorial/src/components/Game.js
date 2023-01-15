import React, { useState } from "react";
import Board from "./Board";

export default function Game() {

    const [xIsNext, setXIsNext] = useState(true)
    const [history, setHistory] = useState([Array(9).fill(null)])

    // last history
    const currentSquares = history[history.length - 1]

    function handlePlay(nextSquares) {

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

                </ol>
            </div>
        </div>
    )
}