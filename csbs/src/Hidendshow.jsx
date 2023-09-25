import React, { useState } from 'react'


const Hidendshow = () => {
    const [show, setShow] = useState(true)
    return (
        <>
            <button className='mx-2' onClick={() => setShow(false)}>Hide</button>
            <button className='mx-2' onClick={() => setShow(true)}>Show</button>
            <button className='mx-2' onClick={() => setShow(!show)}>Toggle</button>
            {
                show ? <h1>Hide and Show</h1> : null
            }
        </>
    );
}

export default Hidendshow;