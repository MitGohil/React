import React, { useState } from 'react'

const Getinputdata = () => {
    const [data, setData] = useState(null)
    const [print, setPrint] = useState(false)

    const getdata = (e) => {
        console.log(e.target.value);
        setData(e.target.value)
        setPrint(false)
    }

    const printdata = () => {
        setPrint(true)

    }
    return (
        <>
            <h1>Input data</h1>

            {/* <input type="text" onChange={(e) => setData(e.target.value)} />
            <h1>{data}</h1> */}

            <input type="text" onChange={getdata} />
            <button onClick={printdata}>Print-data</button>
            {
                print ? <h2>{data}</h2> : null
            }


        </>
    );
}

export default Getinputdata;