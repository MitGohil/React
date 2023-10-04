import React, { Component } from 'react'

class Constructorinlifecycle extends Component {
    constructor() {
        super();
        console.log("constructor called");
    }

    render() {
        console.log("Render called");
        return (
            <>
                <h1>In calss component constroctor always called before render</h1>
                <h1>Call super() , because called its parent constroctor component  </h1>
            </>
        );
    }
}

export default Constructorinlifecycle;