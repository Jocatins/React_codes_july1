import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comments: '',
            topic: 'react'
        }
    }
    handleUsername = e => {
        this.setState({
            username: e.target.value
        })
    }
    handleComment = e => {
        this.setState({
            comments: e.target.value
        })
    }
    handleTopic = e => {
        this.setState({
            topic: e.target.value
        })
    }
    handleSubmit = e => {
        alert(`${this.state.username} ${this.state.topic} ${this.state.comments}`)
        e.preventDefault()
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username: </label>
                    <input type="text" value={this.state.username}
                        onChange={this.handleUsername} />
                </div>
                <div>
                    <label>Comments</label>
                    <textarea value={this.state.comments} onChange={this.handleComment}></textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={this.state.topic} onChange={this.handleTopic}>
                        <option value="react">React</option>
                        <option value="python">python</option>
                        <option value="html">html</option>
                    </select>
                </div>
                <button type="submit">submit</button>
            </form>
        )
    }
}

export default Form
