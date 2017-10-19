import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import games from './games'
import gameSearch from './gameSearch'
import characterSearch from './characterSearch'

const reducer = combineReducers({
	games,
	gameSearch,
	characterSearch
})

const middleware = applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
const store = createStore(reducer, middleware)

export default store
export * from './games'
export * from './gameSearch'
export * from './characterSearch'
