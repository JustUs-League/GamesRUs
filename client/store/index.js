import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import games from './games'
import gameSearch from './gameSearch'
import charactersSearch from './charactersSearch'

const reducer = combineReducers({
	games,
	gameSearch,
	charactersSearch
})

const middleware = applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
const store = createStore(reducer, middleware)

export default store

export * from './games'
export * from './gameSearch'
export * from './charactersSearch'
