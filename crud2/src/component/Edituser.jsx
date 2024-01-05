import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
    MDBContainer,
    MDBInput,
    MDBBtn,
}
    from 'mdb-react-ui-kit';

const Edituser = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { userid } = useParams()
    const navigate = useNavigate()


    useEffect(() => {
        fetch("http://localhost:4000/posts/" + userid).then((result) => {
            result.json().then((resp) => {
                setEmail(resp.email)
                setPassword(resp.password)
            })
        })
    }, [])
    function savedata() {
        let data = { email, password }
        fetch("http://localhost:4000/posts/" + userid, {
            method: "PUT",
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
        <div>
            <h1>Edit user</h1>
            <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

                <MDBInput wrapperClass='mb-4' disabled label='id' id='form3' type='text' />
                <MDBInput value={email} onChange={(e) => setEmail(e.target.value)} wrapperClass='mb-4' label='Email address' id='form1' type='email' />
                <MDBInput value={password} onChange={(e) => setPassword(e.target.value)} wrapperClass='mb-4' label='Password' id='form2' type='password' />
                <MDBBtn className="mb-4" onClick={savedata}>Update</MDBBtn>

            </MDBContainer>
        </div>
    )
}

export default Edituser
