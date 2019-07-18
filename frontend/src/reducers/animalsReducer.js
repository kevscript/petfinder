import { FETCH_ANIMALS_BEGIN, FETCH_ANIMALS_SUCCESS, FETCH_ANIMALS_ERROR } from '../actions/types'

const initialState = {
  loading: true,
  animals: null,
  pagination: null,
  error: ''
}

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_ANIMALS_BEGIN:
      return {
        ...state,
        loading: true
      }

    case FETCH_ANIMALS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: [...action.payload.animals],
        pagination: {...action.payload.pagination}
      }

    case FETCH_ANIMALS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    default:
      return  state
  }

}