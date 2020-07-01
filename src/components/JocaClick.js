import React from 'react'

function JocaClick() {
    function handleClick() {
        console.log('button clicked')
    }
    return (
        <div>
            <button onClick={handleClick}>click</button>
        </div>
    )
}

export default JocaClick
