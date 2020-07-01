import React, { Component } from 'react'

class LifeCycleA1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Titan'
        }
        console.log('lifeCycleA1 constructor')
    }
    static getDerivedStateFromProps(props, state) {
        console.log('lifeCycleA1 getDerivedStateFromProps')
        return null
    }
    componentDidMount() {
        console.log('lifeCycleA1 component Did mount')
    }
    render() {
        console.log('life cycle A1 rendered')
        return (
            <div>
                life cycle A
            </div>
        )
    }
}

export default LifeCycleA1
