import React, { useState } from 'react'
import Newsboard from './Newsboard';
import Newsnav from './Newsnav';
import "../Projects.css"
const Newsapp = () => {
    const [category, setCategory] = useState("general")
    const [country, setCountry] = useState("in")

    return (
        <>
            <div className="news">
                <Newsnav setCategory={setCategory} setCountry={setCountry} />
                <Newsboard category={category} country={country} />
            </div>
        </>
    );
}

export default Newsapp;