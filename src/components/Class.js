import React, { Component } from 'react';

class Class extends Component {
    constructor() {
        super()
        this.state = {
            message: 'good night jenny'
        }
    }
    changeMessage = () => {
        this.setState({
            message: 'good night nicky'
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Class;