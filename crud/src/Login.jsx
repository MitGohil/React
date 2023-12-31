import React, { useEffect, useState } from 'react';
import {
    MDBContainer, MDBInput, MDBBtn, MDBCardBody
}
    from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()
    // const img = "https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"

    useEffect(() => {
        sessionStorage.clear()
    }, [])


    const signin = () => {
        // fetch(`http://localhost:2000/students?email=${email}&password=${password}`).then((result) => {
        //     return result.json().then((resp) => {
        //         console.log(resp);
        //         if (resp[0]) {
        //             sessionStorage.setItem("role", resp[0].role)
        //             if (resp[0].role === "admin") {
        //                 navigate("/studentdata")
        //             }
        //             else {
        //                 navigate("/home")
        //             }
        //         }
        //         else {
        //             alert("Invalid Email or Password")
        //         }
        //     })
        // })

        const posts = async () => {
            const apiUrl = `http://localhost:2000/students?email=${email}&password=${password}`;
            const response = await fetch(apiUrl);
            const resjson = await response.json();
            if (resjson[0]) {
                sessionStorage.setItem("role", resjson[0].role)
                if (resjson[0].role === "admin") {
                    navigate("/studentdata")
                }
                else {
                    navigate("/home")
                }
            }
            else {
                alert("Invalid Email or Password")
            }
        }
        posts()
    }
    const handleback = () => {
        navigate("/login")
    }
    return (
        <>

            <MDBContainer className="p-3 my-5 d-flex flex-column w-50" >
                <MDBCardBody className='p-5 shadow-5 text-center'>

                    <MDBInput value={email} onChange={(e) => setEmail(e.target.value)} wrapperClass='mb-4' label='Email address' id='form1' type='email' />
                    <MDBInput value={password} onChange={(e) => setPassword(e.target.value)} wrapperClass='mb-4' label='Password' id='form2' type='password' />

                    <MDBBtn className="my-4 mx-2" onClick={signin}>Sign in</MDBBtn>
                    <MDBBtn className='my-4 mx-2' onClick={handleback} >Back</MDBBtn>

                    <div className="text-center">
                        <p>Not a member?<Link to="/createuser">Register</Link></p>
                    </div>
                </MDBCardBody>

            </MDBContainer >
        </>

    );
}

export default Login;