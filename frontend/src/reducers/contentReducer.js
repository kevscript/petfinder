import {
  FETCH_BREEDS_BEGIN,
  FETCH_BREEDS_SUCCESS,
  FETCH_BREEDS_ERROR,
  FETCH_TYPE_BEGIN,
  FETCH_TYPE_SUCCESS,
  FETCH_TYPE_ERROR
} from '../actions/types'

const initialState = {
  loading: true,
  error: null,
  type: null,
  breeds: null,
  genders: ['any', 'male', 'female'],
  ages: ['any', 'baby', 'young', 'adult', 'senior'],
  sizes: ['any', 'small', 'medium', 'large', 'xlarge'],
  where: '',
}

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_TYPE_BEGIN:
      return {
        ...state,
        loading: true
      }

    case FETCH_TYPE_SUCCESS:
      return {
        ...state,
        loading: false,
        type: action.payload
      }

    case FETCH_TYPE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    case FETCH_BREEDS_BEGIN:
      return {
        ...state,
        loading: true
      }

    case FETCH_BREEDS_SUCCESS:
      return {
        ...state,
        loading: false,
        breeds: [...action.payload]
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