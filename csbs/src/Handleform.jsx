import React, { useState } from 'react'

const Handleform = () => {
    const [name, setName] = useState("")
    const [select, setSelect] = useState("")
    const [tc, setTc] = useState(false)
    const [show, setShow] = useState(false)

    const handlesubmit = (event) => {
        event.preventDefault()
        console.log(name, select, tc);
        setShow(!show)
    }
    const handleclr = () => {
        setName("")
        setSelect("")
        setTc(false)
        console.log(name, select, tc);

    }
    return (
        <>
            <h1>Handle form in ReactJS</h1>
            <form action="" onSubmit={handlesubmit}>
                <input type="text" placeholder='Enter Your Name' value={name} onChange={(e) => setName(e.target.value)} /> <br />
                <select name="" id="" value={select} onChange={(e) => setSelect(e.target.value)}>
                    <option >Select Option</option>
                    <option >HTML</option>
                    <option >CSS</option>
                    <option>JAVAScript</option>
                </select> <br />
                <input type="checkbox" name="" id="" value={tc} onChange={(e) => setTc(e.target.checked)} /> Accept T & C
                <br />
                <input type="submit" value="SUBMIT" />
                <input type="button" onClick={handleclr} value="Clear" />
            </form >
            {
                show ?
                    <>
                        <h1>{name}</h1>
                        <h2>{select}</h2>
                    </> : null

            }
        </>
    );
}

export default Handleform;