import React, { Component } from 'react'
import componentunmount from './componentunmount';

class Constructorinlifecycle extends Component {
    constructor() {
        super();
        this.state = {
            name: "Mitesh",
            count: 0,
            show: true
        }
        console.log("constructor called");
    }
    componentDidMount() {
        console.log("componentDidMount");
    }
    componentDidUpdate() {
        console.log("componentDidUpdate");
    }
    shouldComponentUpdate() {
        console.log("shouldComponentUpdate", this.state.count);
        // return false;    //Bydefalt false, stop the render rendring
        return true
    }

    render() {
        console.log("Render called");
        return (
            <>
                <h1>In calss component constroctor always called before render</h1>
                <h1>Call super() , because called its parent constroctor component  </h1>
                <h2>{this.state.name}</h2>
                <button onClick={() => { this.setState({ name: "Gohil Mitesh" }) }}>Update name</button>
                <h2>{this.state.count}</h2>
                <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>Update count</button>

                <button onClick={() => this.setState({ show: !this.state.show })}>Hide child</button>
                {
                    this.state.show ? <componentunmount /> : <h1>Childe component hide</h1>
                }
            </>
        );
    }
}

export default Constructorinlifecycle;