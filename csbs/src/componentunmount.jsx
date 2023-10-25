import React, { Component } from 'react'

class componentunmount extends Component {
    componentWillUnmount() {
        alert("componentWillUnmount called")
        console.log("componentWillUnmount called");
    }
    render() {
        return (
            <h1>componentWillUnmount function</h1>
        );
    }
}

export default componentunmount;