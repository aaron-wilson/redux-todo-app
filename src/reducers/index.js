/**
 * Reducers specify how application's state changes in response to actions
 * sent to the store
 *
 * (previousState, action) => newState
 * 		similar to arr.reduce( (accumulator, currentValue) => { } )
 */

import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
  todos,
  visibilityFilter
})

export default todoApp
