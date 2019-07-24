import { combineReducers } from 'redux'
import contentReducer from './contentReducer'
import animalsReducer from './animalsReducer'

export default combineReducers({
  content: contentReducer,
  animals: animalsReducer
})