import {createStore, applyMiddleware, combineReducers} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import authReducer from './authReducer'
// import authReducer from './authReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    // auth: authReducer,
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))