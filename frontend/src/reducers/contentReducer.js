import {
  FETCH_BREEDS_BEGIN,
  FETCH_BREEDS_SUCCESS,
  FETCH_BREEDS_ERROR
} from '../actions/types'

const initialState = {
  loading: true,
  error: null,
  types: ['dog', 'cat'],
  breeds: null,
  gender: ['any', 'male', 'female'],
  age: ['any', 'baby', 'young', 'adult', 'senior'],
  size: ['any', 'small', 'medium', 'large', 'xlarge'],
  where: '',
}

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_BREEDS_BEGIN:
      return {
        ...state,
        loading: true
      }

    case FETCH_BREEDS_SUCCESS:
      return {
        ...state,
        loading: false,
        breed: [...action.payload]
      }
    
    case FETCH_BREEDS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    
    default:
      return state
  }
}