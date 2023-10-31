import React, { useState } from 'react'
// import "./App.css"
import style from "./styled.module.css"
import { MDBTable, MDBTableHead, MDBTableBody, MDBBtn } from 'mdb-react-ui-kit';
// import { useSpring } from 'react-spring';
import { useSpring, animated } from 'react-spring';


const Styled = () => {
    const [showBox, setShowBox] = useState(false);

    const fadeInAnimation = useSpring({
        opacity: showBox ? 1 : 0, // Set opacity based on showBox state
        from: { opacity: 0 }, // Initial opacity when showBox is false
    });


    const array = [1, 2, 3, 4, 5, 6]
    const students = [
        {
            name: "aaa", email: "aaa@gmail.com", mo: 111, address: [
                { House: 10, city: "Vadhvan", country: "India" },
                { House: 11, city: "Surendranagar", country: "India" },
                { House: 12, city: "Ahmedabad", country: "India" },
                { House: 13, city: "Rajkot", country: "India" },
            ]
        },
        {
            name: "bbb", email: "bbb@gmail.com", mo: 222, address: [
                { House: 10, city: "Vadhvan", country: "India" },
                { House: 11, city: "Surendranagar", country: "India" },
                { House: 12, city: "Ahmedabad", country: "India" },
                { House: 13, city: "Rajkot", country: "India" },
            ]
        },
        {
            name: "ccc", email: "ccc@gmail.com", mo: 333, address: [
                { House: 10, city: "Vadhvan", country: "India" },
                { House: 11, city: "Surendranagar", country: "India" },
                { House: 12, city: "Ahmedabad", country: "India" },
                { House: 13, city: "Rajkot", country: "India" },
            ]
        },
        {
            name: "ddd", email: "ddd@gmail.com", mo: 444, address: [
                { House: 10, city: "Vadhvan", country: "India" },
                { House: 11, city: "Surendranagar", country: "India" },
                { House: 12, city: "Ahmedabad", country: "India" },
                { House: 13, city: "Rajkot", country: "India" },
            ]
        },
        {
            name: "eee", email: "eee@gmail.com", mo: 555, address: [
                { House: 10, city: "Vadhvan", country: "India" },
                { House: 11, city: "Surendranagar", country: "India" },
                { House: 12, city: "Ahmedabad", country: "India" },
                { House: 13, city: "Rajkot", country: "India" },
            ]
        },
        {
            name: "fff", email: "fff@gmail.com", mo: 666, address: [
                { House: 10, city: "Vadhvan", country: "India" },
                { House: 11, city: "Surendranagar", country: "India" },
                { House: 12, city: "Ahmedabad", country: "India" },
                { House: 13, city: "Rajkot", country: "India" },
            ]
        }
    ]
    // array.map((data) => {
    //     console.log("using map" + data);
    // })
    // for (let i = 0; i < array.length; i++) {
    //     console.log("using For loop" + array[i]);
    // }
    return (
        <>
            <div>
                <MDBBtn className='mx-auto' color='success' onClick={() => setShowBox(!showBox)}>
                    Toggle Box
                </MDBBtn>
                <animated.div
                    style={{
                        ...fadeInAnimation,
                        width: 100,
                        height: 100,
                        backgroundColor: 'darksalmon',
                        margin: '20px 0',
                    }} className='mx-auto'
                >
                    {/* Your content inside the animated box */}
                    {showBox && <p>This box fades in and out!</p>}
                </animated.div>
            </div>

            <h1 className='primary'>Style 1 in React JS</h1>
            <h1 style={{ color: "red", backgroundColor: "green" }}>Style 2 in react JS</h1>
            <h1 className={style.secondary}>Style 3 in react JS</h1>
            {
                array.map((item) =>
                    <h1>{item}</h1>
                )
            }
            {/* Map function give return value but in for loop return value not given, so we use map method for loop */}

            <MDBTable striped bordered hover>
                <MDBTableHead>
                    <tr>
                        <th scope='col'>Id</th>
                        <th scope='col'>Name</th>
                        <th scope='col'>Email</th>
                        <th scope='col'>Mo No</th>
                        <th scope='col'>Address</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {
                        students.map((item, i) =>
                            <>
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.mo}</td>
                                    <td>
                                        <MDBTable striped bordered hover>
                                            <MDBTableHead>
                                                <tr>
                                                    <td>House Number</td>
                                                    <td>City</td>
                                                    <td>Country</td>
                                                </tr>
                                            </MDBTableHead>
                                            <MDBTableBody>
                                                {
                                                    item.address.map((add) =>
                                                        <>
                                                            <tr>
                                                                <td>{add.House}</td>
                                                                <td>{add.city}</td>
                                                                <td>{add.country}</td>
                                                            </tr>
                                                        </>)
                                                }
                                            </MDBTableBody>
                                        </MDBTable>
                                    </td>
                                </tr>
                            </>
                        )
                    }
                </MDBTableBody>
            </MDBTable>
        </>
    );
}

export default Styled;