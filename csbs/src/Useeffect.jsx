import React, { useEffect, useState } from 'react'
import Useeffectchild from './Useeffectchild'


const Useeffect = () => {
    const [count, setCount] = useState(0)
    const [data, setData] = useState(10)
    useEffect(() => {
        // alert("Useeffect called")
        console.log("Useeffect called on count");
    }, [count])
    useEffect(() => {
        // alert("Useeffect called")
        console.log("Useeffect called on data");
    }, [data])
    return (
        <>
            <h1>Use effect</h1>
            {/* <h2>Count : {count}</h2> */}
            {/* <h2>Data : {data}</h2> */}
            <Useeffectchild count = {count} data = {data} />
            <button onClick={() => setCount(count + 1)}>Update Count</button>
            <button onClick={() => setData(data + 5)}>Update Data</button>
        </>
    );
}

export default Useeffect;