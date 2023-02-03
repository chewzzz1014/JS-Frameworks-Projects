import Square from './Square';

export default function Board({ xIsNext, squares, onPlay }) {

    const winner = calculateWinner(squares)
    let status
    status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`

    function handleClick(i) {
        // if the square is ady occupied or someone has won, do nothing
        if (squares[i] || winner)
            return

        // else, update the value in the square based on the current player
        const newSq = squares.slice()
        newSq[i] = xIsNext ? 'X' : 'O'
        onPlay(newSq)
    }

    return (
        <div>
            <div className="status">{status}</div>
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

// to calculate winners
// list out all combination of winning and check whether the condition is satisfied
function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for (let i = 0; i < lines.length; i++) {
        // destruct array
        const [a, b, c] = lines[i]

        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
            return squares[a]
    }

    return null
}