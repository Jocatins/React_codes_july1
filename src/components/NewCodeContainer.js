import React, { useState } from 'react';
import { connect } from 'react-redux'
import { getCode } from '../redux'

const NewCodeContainer = (props) => {
    const [number, setNumber] = useState(1)
    return (
        <div>
            <h3>number of codes - {props.numOfCodes}</h3>
            <input type="text" value={number} onChange={e => setNumber(e.target.value)} />
            <button onClick={() => props.getCode(number)}>get{number} codes</button>
        </div>
    );
}
const mapStateToProps = state => {
    return {
        numOfCodes: state.code.numOfCodes
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getCode: number => dispatch(getCode(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCodeContainer);