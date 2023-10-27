import React, { useState } from 'react'

const Projects = () => {
    const [citizen, setCitizen] = useState(true);
    const [age, setAge] = useState(true)
    const handlechange = (data) => {
        if (citizen.checked) {

        }
    }

    return (
        <>

            Are you a citizen:<input type="checkbox" value={citizen} onChange={() => handlechange("citizen")} /> <br />
            Are you over 21:    <input type="checkbox" value={age} onChange={() => handlechange("age")} />
        </>
    );
}

export default Projects;