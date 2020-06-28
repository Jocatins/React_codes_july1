import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getCode } from '../redux';

const HooksCodeContainer = () => {
    const numOfCodes = useSelector(state => state.code.numOfCodes)
    const dispatch = useDispatch()
    return (
        <div>
            <h3>number of codes - {numOfCodes}</h3>
            <button onClick={() => dispatch(getCode())}>Get codes</button>
        </div>
    );
}

export default HooksCodeContainer;