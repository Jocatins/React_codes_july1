import { GET_TECH } from './TechTypes'

const initState = {
    numOfTechs: 245
}
const techReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_TECH: return {
            ...state,
            numOfTechs: state.numOfTechs + 2
        }
        default: return state
    }
}

export default techReducer