import React from 'react'

const Functionasprops = (props) => {
    return ( 
        <>
            <h1>User component</h1>
            {/* <button onClick={()=>props.name()}>Call props</button> */}
            <button onClick={props.name}>Call props</button>
        </>
     );
}
 
export default Functionasprops;