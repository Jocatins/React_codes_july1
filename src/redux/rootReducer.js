import { combineReducers } from 'redux'
import codeReducer from './codes/codeReducer'
import techReducer from './techs/techReducer'


const rootReducer = combineReducers({
    code: codeReducer,
    tech: techReducer,

})

export default rootReducer