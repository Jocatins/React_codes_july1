const { GET_CODE } = require("./CodeTypes")



const initState = {
    numOfCodes: 30000
}

const codeReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_CODE: return {
            ...state,
            numOfCodes: state.numOfCodes + 600
        }
        default: return state
    }
}
export default codeReducer