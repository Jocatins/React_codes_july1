import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    increaseCount = () => {
        this.setState({
            count: this.state.count + 90
        }, () => { console.log('call back func', this.state.count) })
    }
    render() {
        return (
            <div>
                count :{this.state.count}
                <button onClick={() => this.increaseCount()}>Increase</button>
            </div>
        )
    }
}

export default Counter
