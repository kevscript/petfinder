import React, { useState } from 'react'
import { connect } from 'react-redux'
import { setSelectedType, fetchBreeds, fetchAnimals, setValue, resetValues, resetPagination } from '../actions'
import { PulseLoader } from 'react-spinners'
import styled from 'styled-components'

import Header from '../components/Header'
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

const MainPage = ({ content, animals, setSelectedType, fetchBreeds, fetchAnimals, setValue, resetValues, resetPagination }) => {

  const [openForm, setOpenForm] = useState(false)
  const { data, pagination, values, loading } = animals

  const handleOpenForm = () => {
    setOpenForm(!openForm)
  }

  const handleTypeSelection = (e) => {
    const type = e.currentTarget.value
    resetValues()
    setSelectedType(type)
    fetchAnimals()
    fetchBreeds(type)
  }

  const handleNewSearch = (e) => {
    e.preventDefault()
    setOpenForm(false)
    resetPagination()
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
      <Header 
        handleTypeSelection={handleTypeSelection} 
        content={content}
        handleNewSearch={handleNewSearch}
        handleValuesSelect={handleValueChange}
        values={values}
        handleOpenForm={handleOpenForm}
        openForm={openForm}
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
  resetValues,
  resetPagination
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)