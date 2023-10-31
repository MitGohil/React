const User = (props) => {
    // We create component inside the component
    // function Extra() {
    //     return (
    //         <div>Insider Component</div>
    //     )
    // }
    // return (
    //     <div className="App">
    //         <h1>Hello User</h1>
    //         {/* Uses of insider component  */}
    //         <Extra />
    //         {Extra()}
    //     </div>

    // );

    const data = "Mitesh Gohil"
    return (
        <>
            {/* <h1>User name is {props.data.name}</h1> */}
            <div>

                <span>User name is {props.data.name}</span>
                <span>User email is {props.data.email}</span>
                <span>User Mobile is {props.data.mo}</span>
                <button onClick={() => alert(`User name is ${props.data.name}`)}>Show Name</button>
                {/* <button onClick={props.alert}>Show Alert</button> */}

                {/* Send data to parent */}
                <button onClick={() => props.alert(data)}>Show Alert</button>
            </div>
        </>
    )

}

export default User;

