import React, {useState} from 'react'
import {calculateWinner} from '../helpers'
import Board from './Board'

const styles = {
    width: '200px',
    margin: '20px auto',
};

export default function Game() {
    const [board, setBoard]=useState(new Array(9).fill(null))
    const [xIsNext, setXisNext]=useState(true)
    const winner= calculateWinner(board)

    function handleClick(i){
        const boardCopy=[...board]
        if(winner||boardCopy[i]) return
        boardCopy[i]=xIsNext?'X':'O'
        setBoard(boardCopy)
        setXisNext(!xIsNext)
    }

    function jumpTo(){

    }

    function renderMoves(){
        return(
            <button onClick={() => setBoard(Array(9).fill(null))}>
                Start Game
            </button>
        )
    }

    return (
        <div>
            <Board squares={board} onClick={handleClick}/>
            <div style={styles}>
                <p>{winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}</p>
                {renderMoves()}
            </div>
        </div>
    )
}
