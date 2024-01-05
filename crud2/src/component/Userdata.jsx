import React, { useEffect, useState } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';

export default function Userdata() {
    const [userdata, setUserdata] = useState([])
    const navigate = useNavigate()
    const url = "https://jsonplaceholder.typicode.com/posts"

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setUserdata(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [])

    const view = (id) => {
        navigate("/viewuser/" + id)
    }
    const edit = (id) => {
        navigate("/edituser/" + id)
    }

    const delet = async (id) => {
        try {
            const response = await fetch(`${url}/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                const updatedItems = userdata.filter((item) => item.id !== id);
                setUserdata(updatedItems);
            } else {
                console.error('Failed to delete item');
            }
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };
    return (
        <MDBTable align='middle'>
            <MDBTableHead>
                <tr><Link to="/createuser"><button>Add user</button></Link></tr>
                <tr>
                    <th scope='col'>UserId</th>
                    <th scope='col'>Id</th>
                    <th scope='col'>title</th>
                    <th scope='col'>Body</th>
                    <th scope='col'>Actions</th>
                </tr>
            </MDBTableHead>
            <MDBTableBody>

                {
                    userdata && userdata.map((item) =>
                        <tr>
                            <td>{item.userId}</td>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.body}</td>
                            <td>
                                <button onClick={() => edit(item.id)} >Edit</button>
                                <button onClick={() => delet(item.id)}>Delete</button>
                                <button onClick={() => { view(item.id) }}>View</button>
                            </td>
                        </tr>
                    )
                }

            </MDBTableBody>
        </MDBTable>
    );
}