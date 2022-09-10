import React from 'react'
import Cell from './Cell'

export default function Board(props) {
    const {cells, onClick, isX} = props
    return (
        <div className='board'>
            {cells.map((item, index) => (
                <Cell key={index} 
                value={item} 
                onClick={() => onClick(index)}
                style={item === "X" ? "is-x" : item === "O" ? "is-o" : ""}></Cell>
            ))}
        </div>
    )
}
