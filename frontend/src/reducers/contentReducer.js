import {
  FETCH_BREEDS_BEGIN,
  FETCH_BREEDS_SUCCESS,
  FETCH_BREEDS_ERROR,
  FETCH_TYPES_BEGIN,
  FETCH_TYPES_SUCCESS,
  FETCH_TYPES_ERROR,
  SET_SELECTED_TYPE
} from '../actions/types'

const initialState = {
  loading: true,
  error: null,
  types: null,
  selected: null,
  breeds: [{ name: 'Any' }],
  genders: ['Any', 'Male', 'Female'],
  ages: ['Any', 'Baby', 'Young', 'Adult', 'Senior'],
  sizes: ['Any', 'Small', 'Medium', 'Large', 'XLarge'],
  where: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_TYPE:
      const selectedType = state.types.find(type => type.name === action.payload)
      return {
        ...state,
        selected: {...selectedType}
      }

    case FETCH_TYPES_BEGIN:
      return {
        ...state,
        loading: true
      }

    case FETCH_TYPES_SUCCESS:
      return {
        ...state,
        loading: false,
        types: [...action.payload],
        selected: {...action.payload[0]}
      }

    case FETCH_TYPES_ERROR:
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
        breeds: [...initialState.breeds, ...action.payload]
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