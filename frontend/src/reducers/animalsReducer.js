import {
  FETCH_ANIMALS_BEGIN,
  FETCH_ANIMALS_SUCCESS,
  FETCH_ANIMALS_ERROR,
  SET_VALUE,
  RESET_VALUES,
  RESET_PAGINATION
} from '../actions/types'

const initialState = {
  values: {
    breed: 'Any',
    gender: 'Any',
    age: 'Any',
    size: 'Any',
    coat: 'Any',
    color: 'Any',
    page: 1
  },
  loading: true,
  error: null,
  data: null,
  pagination: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case RESET_VALUES:
      return {
        ...state,
        values: { ...initialState.values }
      }

    case RESET_PAGINATION:
      return {
        ...state,
        values: {
          ...state.values,
          page: 1
        }
      }

    case SET_VALUE:
      return {
        ...state,
        values: {
          ...state.values,
          ...action.payload
        }
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