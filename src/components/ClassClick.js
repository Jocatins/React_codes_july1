import React, { Component } from 'react'

class ClassClick extends Component {
    handleClick() {
        console.log('class event')
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>clicker</button>
            </div>
        )
    }
}

export default ClassClick
