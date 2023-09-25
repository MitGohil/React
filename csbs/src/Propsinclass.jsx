import React, { Component } from 'react'


class Propsinclass extends Component {
    constructor() {
        super();
        this.state = {
            name: "Gohil",
            email: "abc@abc"
        }
    }
    render() {
        return (
            <>
                <div style={{ backgroundColor: "skyblue" }}>

                    <h1>Props in class</h1>
                    <h1>{this.props.name}</h1>
                    <h4>{this.props.email}</h4>

                    <h5>{this.state.name}</h5>
                    <h5>{this.state.email}</h5>
                    <button onClick={() => { this.setState({ name: "Gohil Mitesh" }) }}>Update name</button>
                    <button onClick={() => { this.setState({ email: "xyz@xyz" }) }}>Update email</button>
                </div>
            </>
        );
    }
}

export default Propsinclass;