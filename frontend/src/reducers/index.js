import { combineReducers } from 'redux'
import animalsReducer from './animalsReducer'

export default combineReducers({
  animals: animalsReducer
})