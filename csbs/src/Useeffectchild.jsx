import React, { useEffect } from 'react'

const Useeffectchild = (props) => {
    useEffect(() => {
        console.log("useEffect Called");
    },[props.count])
    return (
        <>
            <h1>Count : {props.count}</h1>
            <h1>Data : {props.data}</h1>
        </>
    );
}

export default Useeffectchild;