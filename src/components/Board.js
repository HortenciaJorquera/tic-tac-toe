import React from 'react'
import Square from './Square'

const style = {
    border: '4px solid darkblue',
    borderRadius: '10px',
    width: '250px',
    height: '250px',
    margin: '0 auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
};

export default function Board({squares,onClick}) {
    return (
        //squares.map((square,i)=>(<Square value={i} onClick={()=>onClick('value')}/>))
        <div style={style}>
            <Square value={1} onClick={()=>onClick('value')}/>
            <Square value={2} onClick={()=>onClick('value')}/>
            <Square value={3} onClick={()=>onClick('value')}/>
            <Square value={4} onClick={()=>onClick('value')}/>
            <Square value={5} onClick={()=>onClick('value')}/>
            <Square value={6} onClick={()=>onClick('value')}/>
            <Square value={7} onClick={()=>onClick('value')}/>
            <Square value={8} onClick={()=>onClick('value')}/>
            <Square value={9} onClick={()=>onClick('value')}/>
        </div>
    )
}
