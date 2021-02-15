import React from 'react'
import Board from './Board'

export default function Game() {
    function handleClick(value){
        console.log(value)
    }

    function jumpTo(){

    }

    function renderMoves(){

    }

    return (
        <div>
            <Board squares={new Array(9)} onClick={handleClick}/>
        </div>
    )
}
