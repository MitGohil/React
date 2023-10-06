import React, { Component } from 'react'

class Constructorinlifecycle extends Component {
    constructor() {
        super();
        this.state = {
            name: "Mitesh"
        }
        console.log("constructor called");
    }
    componentDidMount() {
        console.log("componentDidMount");
    }
    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    render() {
        console.log("Render called");
        return (
            <>
                <h1>In calss component constroctor always called before render</h1>
                <h1>Call super() , because called its parent constroctor component  </h1>
                <h2>{this.state.name}</h2>
                <button onClick={() => { this.setState({ name: "Gohil Mitesh" }) }}>Update name</button>
            </>
        );
    }
}

export default Constructorinlifecycle;