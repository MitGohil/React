import React, { useEffect, useState, } from 'react'
import {
    MDBBtn, MDBTable, MDBTableHead, MDBTableBody,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
} from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
export default function Studentdata() {

    const [userdata, setUserdata] = useState([])
    const [query, setQuery] = useState("")
    const navigate = useNavigate()
    const img = "https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"

    const [basicModal, setBasicModal] = useState(false);
    const [dtl, setDtl] = useState({})



    // We store fetch API in one variable and use it many time in project
    const getStudentdata = () => {
        fetch("http://localhost:2000/students").then((result) => {
            return result.json().then((resp) => {
                // console.log(resp);
                setUserdata(resp)
            })
        })
    }
    const handleedit = (id) => {
        navigate(`/editstudentdata/${id}`)
        // navigate("/editstudentdata/" + id)
    }
    // const handledetail = (id) => {
    //     navigate(`/Studentdetails/${id}`)
    //     // navigate("/Studentdetails/" + id)
    // }
    const handledetail = (id) => {
        setBasicModal(!basicModal)
        fetch(`http://localhost:2000/students/${id}`).then((result) => {
            return result.json().then((resp) => {
                setDtl(resp);
            })
        })
    };

    useEffect(() => {
        // fetch("http://localhost:2000/students").then((result) => {
        //     return result.json().then((resp) => {
        //         // console.log(resp);
        //         setUserdata(resp)
        //     })
        // })
        let role = sessionStorage.getItem('role')
        if (role !== "admin") {
            navigate("/login")
        }
        else {

            getStudentdata()
        }
    }, [])

    function handledel(id) {
        if (window.confirm('Do you want to remove?')) {
            fetch(`http://localhost:2000/students/${id}`, {
                method: "DELETE",
            }).then((result) => {
                result.json().then((resp) => {
                    alert('Removed successfully.')
                    getStudentdata()
                })
            })
        }
    }


    return (
        <>
            <h1 className='text-center fw-bold text-decoration-underline fst-italic'>Student data</h1>

            <MDBTable className='w-75 mx-auto' align='middle' border="1px" >
                <MDBTableHead>
                    <tr>
                        <th colSpan="6" className='text-center'>
                            <Link to="/login">
                                <MDBBtn className=' text-dark mx-1 bg-info bg-gradient' rounded size='sm'>Log-Out</MDBBtn>
                            </Link>
                            {/* <Link to="/createuser">
                                <MDBBtn className=' text-dark mx-1 bg-info bg-gradient' rounded size='sm'>Add New User</MDBBtn>
                            </Link> */}
                        </th>
                    </tr>
                    <tr>
                        <th colSpan="6" className='text-center'>
                            <input placeholder="Search" type='Search' onChange={e => setQuery(e.target.value)} />
                        </th>
                    </tr>

                    <tr className='fw-bold text-decoration-underline fs-4'>
                        <th className='text-dark bg-gradient' scope='col'>Id</th>
                        <th className='text-dark bg-gradient' scope='col'>Name</th>
                        <th className='text-dark bg-gradient' scope='col'>Email</th>
                        <th className='text-dark bg-gradient' scope='col'>Password</th>
                        <th className='text-center text-dark bg-gradient' scope='col'>Role</th>
                        <th className='text-center text-dark bg-gradient' scope='col'>Actions</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {
                        userdata.filter((item) => item.name.toLowerCase().includes(query) || item.email.toLowerCase().includes(query) || item.role.toLowerCase().includes(query)).map((data) =>
                            <tr >
                                <td className='fs-5 text-dark bg-gradient'>{data.id}</td>
                                <td className='fs-5 text-dark bg-gradient'>{data.name}</td>
                                <td className='fs-5 text-dark bg-gradient'>{data.email}</td>
                                <td className='fs-5 text-dark bg-gradient'>{data.password}</td>
                                <td className='fs-5 text-dark bg-gradient'>{data.role}</td>
                                <td className='text-center'>
                                    <MDBBtn onClick={() => { handleedit(data.id) }} className='text-dark mx-1 bg-primary bg-gradient' rounded size='sm'>Edit</MDBBtn>
                                    <MDBBtn onClick={() => handledetail(data.id)} className='text-dark mx-1 bg-primary bg-gradient' rounded size='sm' >Details</MDBBtn>
                                    <MDBBtn onClick={() => handledel(data.id)} className='text-dark mx-1 bg-danger bg-gradient' rounded size='sm' >Delete</MDBBtn>

                                </td>
                            </tr>
                        )
                    }
                </MDBTableBody>
            </MDBTable>

            {/* Details Page  */}

            <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
                <MDBModalDialog>
                    <MDBModalContent>

                        <MDBModalHeader>
                            <MDBModalTitle>Student Detail</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={handledetail}></MDBBtn>
                        </MDBModalHeader>

                        <MDBModalBody>
                            <MDBTable className='mx-auto' align='middle' border="1px" >
                                <MDBTableHead>
                                    <tr>
                                        <th colSpan="2" className='text-dark text-center'>Studentdetail</th>
                                    </tr>
                                </MDBTableHead>

                                <MDBTableBody>
                                    <tr >
                                        <td className='bg-gradient'>Student Id:</td>
                                        <td className='bg-gradient'>{dtl.id}</td>
                                    </tr>
                                    <tr >
                                        <td className='bg-gradient'>Student Name:</td>
                                        <td className='bg-gradient'>{dtl.name}</td>
                                    </tr>
                                    <tr>
                                        <td className='bg-gradient'>Email:</td>
                                        <td className='bg-gradient'>{dtl.email}</td>
                                    </tr>
                                    <tr>
                                        <td className='bg-gradient'>Password:</td>
                                        <td className='bg-gradient'>{dtl.password}</td>
                                    </tr>
                                </MDBTableBody>
                            </MDBTable >
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color='secondary' onClick={handledetail}>Close</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
}
