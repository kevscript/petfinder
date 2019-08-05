import {
  FETCH_ANIMAL_BEGIN,
  FETCH_ANIMAL_SUCCESS,
  FETCH_ANIMAL_ERROR,
} from '../actions/types'

const initialState = {
  loading: true,
  error: null,
  data: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ANIMAL_BEGIN:
      return {
        ...state,
        loading: true
      }

    case FETCH_ANIMAL_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      }

    case FETCH_ANIMAL_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    default:
      return state
  }
}