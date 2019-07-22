import axios from 'axios'
import { 
  FETCH_ANIMALS_BEGIN,
  FETCH_ANIMALS_SUCCESS,
  FETCH_ANIMALS_ERROR,
  FETCH_BREEDS_BEGIN,
  FETCH_BREEDS_SUCCESS,
  FETCH_BREEDS_ERROR
} from './types'



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
      .then(res => dispatch(fetchBreedsSuccess(res.data)))
      .catch(err => dispatch(fetchBreedsError(err.message)))
  }
}





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

export const fetchAnimals = () => {
  return (dispatch) => {
    dispatch(fetchAnimalsBegin())
    return axios.get('/api/animals/search')
      .then(res => dispatch(fetchAnimalsSuccess(res.data)))
      .catch(err => dispatch(fetchAnimalsError(err.message)))
  }
}