import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: 'joker'
        }
        // this.handleClick = this.handleClick.bind(this)
    }
    // handleClick() {
    //     this.setState({
    //         message: 'titan'
    //     })
    // }
    handleClick = () => {
        this.setState({
            message: 'jocatins'
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/*<button onClick={() => this.handleClick()}>clicks</button> */}
                <button onClick={this.handleClick}>click me</button>
            </div>
        )
    }
}

export default EventBind
