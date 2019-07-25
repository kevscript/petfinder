import {
  FETCH_ANIMALS_BEGIN,
  FETCH_ANIMALS_SUCCESS,
  FETCH_ANIMALS_ERROR,
  SET_VALUES
} from '../actions/types'

const initialState = {
  values: null,
  loading: true,
  error: null,
  data: null,
  pagination: null
}

export default (state = initialState, action) => {
  switch(action.type) {

    case SET_VALUES:
      return {
        ...state,
        values: {...state.values, ...action.payload}
      }

    case FETCH_ANIMALS_BEGIN:
      return {
        ...state,
        loading: true
      }
    
    case FETCH_ANIMALS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    case FETCH_ANIMALS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: [...action.payload.animals],
        pagination: action.payload.pagination
      }

    default:
      return state
  }
}