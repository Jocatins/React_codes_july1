import React from 'react';
import { connect } from 'react-redux'
import { getTech } from '../redux'

const TechContainer = (props) => {
    return (
        <div>
            <h3>number of techs - {props.numOfTechs}</h3>
            <button onClick={props.getTech}>get tech</button>
        </div>
    );
}
const mapStateToProps = state => {
    return {
        numOfTechs: state.tech.numOfTechs
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getTech: () => dispatch(getTech())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TechContainer);