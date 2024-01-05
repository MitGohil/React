import React, { useEffect } from 'react'
import Props from './Props'

const Greeting = (props) => {
    useEffect(() => {
        alert(`Hello ${props.name}`)
    })
    return (
        <div>
            {/* <p>{props.name}</p> */}
        </div>
    )
}

export default Greeting
