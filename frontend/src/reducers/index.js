import { combineReducers } from 'redux'
import animalsReducer from './animalsReducer'
import contentReducer from './contentReducer'

export default combineReducers({
  animals: animalsReducer,
  content: contentReducer
})