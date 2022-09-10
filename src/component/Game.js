import React, { Fragment, useState } from 'react'
import CaculateWin from '../Caculate/CaculateWin'
import Board from './Board'
import "./style.css"

export default function Game() {
    //khởi tạo board
    const [board, setBoard] = useState(Array(9).fill(null))
    const [isXTurn, setIsXTurn] = useState(true)

    const winner = CaculateWin(board)

    const handleClick = (index) => {
        //cập nhật lại board
        const newBoard = [...board]
        //nếu đã win hoặc ô đã đc đánh thì không cho đánh vào ô đó nữa
        if (winner || newBoard[index]) return;
        newBoard[index] = isXTurn ? "X" : "O";
        
        setBoard(newBoard)
        setIsXTurn(!isXTurn)
    }

    const handleReset = () =>{
        setBoard(Array(9).fill(null))
        setIsXTurn(true)
    }

    return (
        <>
            <Board cells={board} onClick={handleClick}></Board>
            {winner ? (
                <>
                    <div className="show-winner">
                        <h4>WINNER WINNER CHICKEN DINNER IS : {isXTurn ? "O" : "X"}</h4>
                        <button className='reset' onClick={handleReset}>
                            New game
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <div className="show-winner">
                        <h4>DRAW</h4>
                        <button className='reset' onClick={handleReset}>
                            New game
                        </button>
                    </div>
                </>
            )}
        </>
    )
}
