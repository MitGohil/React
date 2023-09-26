import React, { useState } from 'react'

const Basicformvalidation = () => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    function handlesubmit(event) {
        event.preventDefault()
        console.log(name, password);
        let item = event.target.value
        if (name.length < 5) {

            setError("enter valid username")
        }
        else if (password.length < 8) {
            setError("Enter valid password")
        }
        else {
            setError("")
        }

    }
    return (
        <>
            <h1>Basic form validation</h1>

            <form action="" onSubmit={handlesubmit}>

                <input type="text" placeholder='Enter Your name' onChange={(e) => setName(e.target.value)} />
                <br />
                <br />
                <input type="password" placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} name="" id="" />
                <br /> <br />

                <input type="submit" value="SUBMIT" />
                <span>{error}</span>
            </form>
        </>
    );
}

export default Basicformvalidation;