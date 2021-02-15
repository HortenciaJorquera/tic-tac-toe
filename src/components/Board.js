import React from 'react'
import Square from './Square'

export default function Board({squares,onClick}) {
    return (
        //squares.map((square,i)=>(<Square value={i} onClick={()=>onClick('value')}/>))
        <div>
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
