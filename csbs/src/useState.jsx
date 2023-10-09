import React, { useState } from 'react'


const Usestate = () => {
    const [data, setData] = useState("Gohil")
    return (
        <>
            <p>With hooks, we can use class component features in functional component, such as state life cycle, pure function, etc..</p>
            <h1>{data}</h1>
            <button onClick={() => { setData("Gohil MItesh") }}>Update data</button>
        </>
    );
}

export default Usestate;