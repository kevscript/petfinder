import axios from 'axios'
import { 
  FETCH_BREEDS_BEGIN,
  FETCH_BREEDS_SUCCESS,
  FETCH_BREEDS_ERROR,
  FETCH_TYPES_BEGIN,
  FETCH_TYPES_SUCCESS,
  FETCH_TYPES_ERROR,
  SET_SELECTED_TYPE,
  FETCH_ANIMALS_BEGIN,
  FETCH_ANIMALS_SUCCESS,
  FETCH_ANIMALS_ERROR,
  SET_VALUES
} from './types'


// SET VALUES
export const setValues = (values) => ({
  type: SET_VALUES,
  payload: values
})

// FETCH ANIMAL
export const fetchAnimalsBegin = () => ({
  type: FETCH_ANIMALS_BEGIN
})

export const fetchAnimalsSuccess = (data) => ({
  type: FETCH_ANIMALS_SUCCESS,
  payload: data
})

export const fetchAnimalsError = (message) => ({
  type: FETCH_ANIMALS_ERROR,
  payload: message
})

export const fetchAnimals = (query) => {
  return (dispatch) => {
    dispatch(fetchAnimalsBegin())
    return axios.get('/api/animals/search', { params: {...query}})
      .then(res => dispatch(fetchAnimalsSuccess(res.data)))
      .catch(err => dispatch(fetchAnimalsError(err.message)))
  }
}

// FETCH TYPE
export const fetchTypesBegin = () => ({
  type: FETCH_TYPES_BEGIN
})

export const fetchTypesSuccess = (dog, cat) => ({
  type: FETCH_TYPES_SUCCESS,
  payload: [
    dog.data.type,
    cat.data.type
  ]
})

export const fetchTypesError = (message) => ({
  type: FETCH_TYPES_ERROR,
  payload: message
})

export const fetchTypes = () => {
  return async (dispatch) => {
    dispatch(fetchTypesBegin())

    const dogPromise = await axios.get(`/api/types/dog`)
    const catPromise = await axios.get(`/api/types/cat`)
    await Promise.all([dogPromise, catPromise])
      .then(([dog, cat]) => dispatch(fetchTypesSuccess(dog, cat)))
      .catch(err => dispatch(fetchTypesError(err.message)))
  }
}

// SET SELECTED TYPE 
export const setSelectedType = (type) => ({
  type: SET_SELECTED_TYPE,
  payload: type
})

// FETCH BREEDS
export const fetchBreedsBegin = () => ({
  type: FETCH_BREEDS_BEGIN
})

export const fetchBreedsSuccess = (data) => ({
  type: FETCH_BREEDS_SUCCESS,
  payload: data
})

export const fetchBreedsError = (message) => ({
  type: FETCH_BREEDS_ERROR,
  payload: message
})

export const fetchBreeds = (animal) => {
  return (dispatch) => {
    dispatch(fetchBreedsBegin())
    return axios.get(`/api/breeds/${animal}`)
      .then(res => dispatch(fetchBreedsSuccess(res.data.breeds)))
      .catch(err => dispatch(fetchBreedsError(err.message)))
  }
}