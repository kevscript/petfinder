import axios from 'axios'
import { 
  FETCH_BREEDS_BEGIN,
  FETCH_BREEDS_SUCCESS,
  FETCH_BREEDS_ERROR,
  FETCH_TYPE_BEGIN,
  FETCH_TYPE_SUCCESS,
  FETCH_TYPE_ERROR,
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
export const fetchTypeBegin = () => ({
  type: FETCH_TYPE_BEGIN
})

export const fetchTypeSuccess = (data) => ({
  type: FETCH_TYPE_SUCCESS,
  payload: data
})

export const fetchTypeError = (message) => ({
  type: FETCH_TYPE_ERROR,
  payload: message
})

export const fetchType = (type) => {
  return (dispatch) => {
    dispatch(fetchTypeBegin())
    return axios.get(`/api/types/${type}`)
      .then(res => dispatch(fetchTypeSuccess(res.data.type)))
      .catch(err => dispatch(fetchTypeError(err.message)))
  }
}

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