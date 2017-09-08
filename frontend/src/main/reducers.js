import { combineReducers } from 'redux'
import todoFormReducer from '../todo/todoReducers'

const rootReducer = combineReducers({
    todo: todoFormReducer
})

export default rootReducer