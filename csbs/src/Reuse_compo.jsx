import React from 'react'
import User from './User';

const Reuse_compo = () => {
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
    // function Warn() {
    //     alert("Hello alert");
    // }

    // Received data from child
    function Warn(name) {
        alert(name);
    }
    return (
        <>
            <h1>Reuse Component</h1>
            {
                students.map((item, i) =>
                    <User data={item} alert={Warn} />)
            }
        </>
    );
}

export default Reuse_compo;