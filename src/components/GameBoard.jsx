import {useState} from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]; // object to represent the game board

export default function GameBoard() {
    const [gameBoard, setGameBoard] = useState(initialGameBoard)

    function handleSelectSquare(rowIndex, colIndex) {
        setGameBoard((prevGameBoard) => {
            const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])]; //copy the game board - to prevent mutation bugs
            updatedBoard[rowIndex][colIndex] = 'X';
            return updatedBoard;
            }
        );
    }

    return (
        <ol id='game-board'>
            {gameBoard.map(
                (row, rowIndex) => <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => <li key={colIndex}>
                            <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>
                                {playerSymbol}
                            </button>
                        </li>)
                        }
                    </ol>
                </li>)}
        </ol>
    )
}