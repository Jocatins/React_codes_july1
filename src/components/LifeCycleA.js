import React, { Component } from 'react'
import LifeCycleA1 from './LifeCycleA1'

class LifeCycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Titan'
        }
        console.log('lifeCycleA constructor')
    }
    static getDerivedStateFromProps(props, state) {
        console.log('lifeCycleA getDerivedStateFromProps')
        return null
    }
    componentDidMount() {
        console.log('lifeCycleA component Did mount')
    }
    render() {
        console.log('life cycle A rendered')
        return (
            <div>
                <LifeCycleA1 />
                life cycle A
            </div>
        )
    }
}

export default LifeCycleA
