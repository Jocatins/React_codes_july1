import { createStore } from 'redux'
import codeReducer from './codes/codeReducer'

const store = createStore(codeReducer)
export default store