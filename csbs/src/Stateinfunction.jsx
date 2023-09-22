import React, { useState } from 'react'

const Stateinfunction = () => {
    const [data, setData] = useState("Mitesh")
    const [count, setCount] = useState(0)
    function updatedata() {
        setData("Gohil Mitesh")
    }
    function updatecount() {
        setCount(count + 1)
    }
    console.log("Render");
    return (
        <>
            <h1>What is state?</h1>
            <p>State is object for store the data. If we use varieble for store the data, we dont update it.But if we use state , we update its data</p>
            <p>Here check console.log, it was every time on function calling. It called re-render</p>
            <h2>{data}</h2>
            <h2>{count}</h2>
            <button onClick={updatedata}>Upadte-data</button>
            <button onClick={updatecount}>Upadte-count</button>
        </>
    );
}

export default Stateinfunction;