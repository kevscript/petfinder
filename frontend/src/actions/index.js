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
  SET_VALUE,
  RESET_VALUES,
  FETCH_ANIMAL_BEGIN,
  FETCH_ANIMAL_SUCCESS,
  FETCH_ANIMAL_ERROR,
} from './types'

export const resetValues = () => ({
  type: RESET_VALUES
})

// SET VALUES
export const setValue = (value) => ({
  type: SET_VALUE,
  payload: value
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

export const fetchAnimals = () => {
  return (dispatch, getState) => {
    dispatch(fetchAnimalsBegin())
    const values = getState().animals.values
    let selectedValues = {}
    selectedValues['type'] = getState().content.selected.name
    for (let [key, value] of Object.entries(values)) {
      if (value && value !== 'Any') {
        selectedValues[key] = value
      }
    }
    return axios.get('/api/animals/search', { params: { ...selectedValues } })
      .then(res => dispatch(fetchAnimalsSuccess(res.data)))
      .catch(err => dispatch(fetchAnimalsError(err.message)))
  }
}

// FETCH TYPE
export const fetchTypesBegin = () => ({
  type: FETCH_TYPES_BEGIN
})

export const fetchTypesSuccess = (data) => ({
  type: FETCH_TYPES_SUCCESS,
  payload: data
})

export const fetchTypesError = (message) => ({
  type: FETCH_TYPES_ERROR,
  payload: message
})

export const fetchTypes = () => {
  return async (dispatch, getState) => {
    dispatch(fetchTypesBegin())
    await axios.get('/api/types')
      .then(res => dispatch(fetchTypesSuccess(res.data.types)))
      .then(() => dispatch(fetchBreeds(getState().content.selected.name)))
      .then(() => dispatch(fetchAnimals()))
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

// FETCH ANIMAL BY ID
export const fetchAnimalBegin = () => ({
  type: FETCH_ANIMAL_BEGIN
})

export const fetchAnimalSuccess = (data) => ({
  type: FETCH_ANIMAL_SUCCESS,
  payload: data
})

export const fetchAnimalError = (message) => ({
  type: FETCH_ANIMAL_ERROR,
  payload: message
})

export const fetchAnimal = (id) => {
  return (dispatch) => {
    dispatch(fetchAnimalBegin())
    return axios.get(`/api/animals/${id}`)
      .then(res => dispatch(fetchAnimalSuccess(res.data.animal)))
      .catch(err => dispatch(fetchAnimalError(err.message)))
  }
}
