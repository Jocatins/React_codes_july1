import React from 'react';
import { connect } from 'react-redux'
import { getCode, getTech } from '../redux';

const ItemContainer = (props) => {
    return (
        <div>
            <h2>items - {props.item}</h2>
            <button onClick={props.getItem}>Get Items</button>
        </div>
    );
}
const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.code ? state.code.numOfCodes : state.tech.numOfTechs
    return {
        item: itemState
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.code ?
        () => dispatch(getCode()) : () => dispatch(getTech())
    return {
        getItem: dispatchFunction
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);