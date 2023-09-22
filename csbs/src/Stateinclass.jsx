import React, { Component } from 'react'

class Stateinclass extends Component {
    constructor() {
        super();
        this.state = {
            data: "Mitesh",
            count : 0
        }
    }
    updatedata() {
        this.setState(
            {
                data : "Gohil Mitesh"
            }
        )
    }
    updatecount = () => {
        this.setState(
            {
                count : this.state.count + 1
            }
        )
    }

    render() {
        return (
            <>
                <h2>{this.state.data}</h2>
                <h2>{this.state.count}</h2>
                <button onClick={() => this.updatedata()}>Upadte-data</button>
                <button onClick={this.updatecount}>Upadte-count</button>
            </>
        );
    }
}

export default Stateinclass;