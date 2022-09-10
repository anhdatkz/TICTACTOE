import React from 'react'

export default function Cell(props) {
    const {value, onClick, style} = props
  return (
    <>
        <div className={`cell ${style}`} onClick={onClick}>
            {value}
        </div>
    </>
  )
}
