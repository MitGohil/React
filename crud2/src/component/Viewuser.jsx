import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Viewuser = () => {
    const { userid } = useParams()
    const [userdata, setUserdata] = useState({})

    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/posts/" + userid).then((result) => {
    //         result.json().then((resp) => {
    //             setUserdata(resp)
    //             console.log(resp);
    //         })
    //     })
    // }, [userid])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts/" + userid);
                const data = await response.json();
                setUserdata(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [userid])

    return (
        <div>

            <>
                <h1>User details</h1>
                <table>

                    <tr>
                        <td>{userdata.userId}</td>
                        <td>{userdata.id}</td>
                        <td>{userdata.title}</td>
                        <td>{userdata.body}</td>
                    </tr>
                </table>
            </>


        </div>
    )
}

export default Viewuser
