import React from 'react'

function MemoComp({ name }) {
    console.log('rendering a memo component')
    return (
        <div>
            {name}
        </div>
    )
}

export default MemoComp
