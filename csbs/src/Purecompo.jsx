import React, { Component, PureComponent } from 'react'

class Purecompo extends PureComponent {
    constructor() {
        super();
        this.state = {
            count: 1
        }
    }
    render() {
        console.log("Check re-rendering");
        return (
            <>
                <h1>Pure component</h1>
                <p>Pure component use for stop the component re-rendring. If state was not update than stop the component re-rendring</p>
                <p>Pure component was check state was update or not, if update than component was re-render else stop the re-rendring </p>
                <h2>{this.state.count}</h2>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>Update</button>
                <button onClick={() => this.setState({ count: this.state.count })}>Not-Update</button>
                {/* Here state was not update but still component was update */}
            </>
        );
    }
}

export default Purecompo;