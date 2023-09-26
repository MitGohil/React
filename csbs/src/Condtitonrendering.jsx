import React, { useState } from 'react'

const Condtitonrendering = () => {
    const [show, setShow] = useState(true)
    const [user, setUser] = useState(1)
    return (
        <>
            <h1>Condtiton Rendering</h1>
            {show ? <h1>True</h1> : <h1>False</h1>}
            {user == 1 ?
                <h1>User 1</h1>
                : user == 2 ? < h1 > User 2</h1 >
                    : <h1>User 3</h1>
            }
            <button onClick={() => setUser(user + 1)}>Update user</button>
            <h3>{user}</h3>
        </>
    );
}

export default Condtitonrendering;