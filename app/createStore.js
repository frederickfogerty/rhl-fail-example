/* global __DEVTOOLS__ __DEV__ */
import initialState from './initialState'
import thunk from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'

const logger = store => next => action => {
  console.groupCollapsed(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
  return result
}

let finalCreateStore
finalCreateStore = applyMiddleware(thunk, logger)(createStore)

export const store = finalCreateStore(combineReducers(reducers), initialState)
