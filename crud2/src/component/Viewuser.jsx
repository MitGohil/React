import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Viewuser = () => {
    const { userid } = useParams()
    const [userdata, setUserdata] = useState({})

    useEffect(() => {
        fetch("http://localhost:4000/posts/" + userid).then((result) => {
            result.json().then((resp) => {
                setUserdata(resp)
            })
        })
    }, [])
    return (
        <div>
            <h1>User details</h1>
            {
                userdata &&
                <>
                    <tr>
                        <td>{userdata.id}</td>
                        <td>{userdata.email}</td>
                        <td>{userdata.password}</td>

                    </tr>
                </>

            }

        </div>
    )
}

export default Viewuser
