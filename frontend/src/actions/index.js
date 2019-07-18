import axios from 'axios'
import { 
  FETCH_ANIMALS_BEGIN,
  FETCH_ANIMALS_SUCCESS,
  FETCH_ANIMALS_ERROR
} from './types'

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