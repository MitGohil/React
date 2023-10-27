import React from 'react'
// import "./App.css"
import style from "./styled.module.css"
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';


const Styled = () => {
    const array = [1, 2, 3, 4, 5, 6]
    const students = [
        { name: "aaa", email: "aaa@gmail.com", mo: 111 },
        { name: "bbb", email: "bbb@gmail.com", mo: 222 },
        { name: "ccc", email: "ccc@gmail.com", mo: 333 },
        { name: "ddd", email: "ddd@gmail.com", mo: 444 },
        { name: "eee", email: "eee@gmail.com", mo: 555 },
        { name: "fff", email: "fff@gmail.com", mo: 666 }
    ]
    // array.map((data) => {
    //     console.log("using map" + data);
    // })
    // for (let i = 0; i < array.length; i++) {
    //     console.log("using For loop" + array[i]);
    // }
    return (
        <>
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
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {
                        students.map((item,i) =>
                            <>
                                <tr key={i}>
                                    <td>{i}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.mo}</td>
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