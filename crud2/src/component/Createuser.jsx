import React, { useState } from 'react';
import {
    MDBContainer,
    MDBInput,
    MDBBtn,
}
    from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

function Createuser() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const savedata = () => {
        const data = { email, password };
        fetch("http://localhost:4000/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then((result) => {
            result.json().then((resp) => {

            })
        })
        navigate("/")



    }
    return (
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

            <MDBInput wrapperClass='mb-4' disabled label='id' id='form3' type='text' />
            <MDBInput value={email} onChange={(e) => setEmail(e.target.value)} wrapperClass='mb-4' label='Email address' id='form1' type='email' />
            <MDBInput value={password} onChange={(e) => setPassword(e.target.value)} wrapperClass='mb-4' label='Password' id='form2' type='password' />
            <MDBBtn className="mb-4" onClick={savedata}>Sign in</MDBBtn>

        </MDBContainer>
    );
}

export default Createuser;