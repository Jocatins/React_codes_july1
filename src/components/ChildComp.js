import React from 'react'

function ChildComp(props) {
    return (
        <div>
            {/*<button onClick={props.greetHandler}>Greet Parent</button>*/}
            <button onClick={() => props.greetHandler('titan')}>Greet</button>
        </div>
    )
}

export default ChildComp
