import React from 'react'
import { connect } from 'react-redux'
import { setSelectedType, fetchBreeds, fetchAnimals, setValue, resetValues } from '../actions'
import { PulseLoader } from 'react-spinners'
import styled from 'styled-components'

import Header from '../components/Header'
import FilterForm from '../components/FilterForm'
import Pagination from '../components/Pagination'
import AnimalsList from '../components/AnimalsList'


const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LoaderContainer = styled.div`
  padding: 200px 0;
`

const MainPage = ({ content, animals, setSelectedType, fetchBreeds, fetchAnimals, setValue, resetValues }) => {

  const { data, pagination, values, loading } = animals

  const handleTypeSelection = (e) => {
    const type = e.currentTarget.getAttribute('data-type')
    resetValues()
    setSelectedType(type)
    fetchBreeds(type)
  }

  const handleFormSubmission = (e) => {
    e.preventDefault()
    fetchAnimals()
  }

  const handleValueChange = (e) => {
    let value = {}
    const key = e.currentTarget.name
    const val = e.currentTarget.value
    value[key] = val
    setValue(value)
  }

  const handlePagination = (page) => {
    const newPage = { page: page }
    setValue(newPage)
    fetchAnimals()
  }

  return (
    <div>
      <Header handleClick={handleTypeSelection} />
      <FilterForm
        content={content}
        animals={animals}
        handleSubmit={handleFormSubmission}
        handleSelect={handleValueChange}
        values={values}
      />
      <ContentContainer>
        {loading
          ? (
            <LoaderContainer>
              <PulseLoader />
            </LoaderContainer>
          )
          : (data && pagination
            ? (
              <div>
                <Pagination pagination={pagination} handlePagination={handlePagination} />
                <AnimalsList data={data} />
                <Pagination pagination={pagination} handlePagination={handlePagination} />
              </div>
            )
            : <h1>An Error Occured</h1>
          )
        }
      </ContentContainer>
    </div>
  )
}

const mapStateToProps = state => ({
  content: state.content,
  animals: state.animals
})

const mapDispatchToProps = {
  setSelectedType,
  fetchBreeds,
  fetchAnimals,
  setValue,
  resetValues
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)