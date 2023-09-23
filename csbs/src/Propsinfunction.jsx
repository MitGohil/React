import React from 'react'

const Propsinfunction = (props) => {
    return (
        <>
            {/* <h1>Props in Function</h1> */}
            <div style={{backgroundColor: "lightblue", color: "blue"}}>
                <h2>{props.name}</h2>
                <h3>{props.email}</h3>
                <h4>Addresss : {props.others.address}</h4>
                <h4>Mobile : {props.others.mobile}</h4>
            </div>
        </>
    );
}

export default Propsinfunction;