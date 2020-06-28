import React from 'react';
import { connect } from 'react-redux'
import { getCode } from '../redux'

const CodeContainer = (props) => {
    return (
        <div>
            <h3>number of codes - {props.numOfCodes}</h3>
            <button onClick={props.getCode}>get code</button>
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
        getCode: () => dispatch(getCode())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CodeContainer);