import { combineReducers } from 'redux'
import contentReducer from './contentReducer'
import animalsReducer from './animalsReducer'
import animalReducer from './animalReducer'

export default combineReducers({
  content: contentReducer,
  animals: animalsReducer,
  animal: animalReducer
})