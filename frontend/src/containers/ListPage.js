import React from 'react'
import { connect } from 'react-redux'
import { fetchAnimals, setValues } from '../actions'

import AnimalsList from '../components/AnimalsList'
import Pagination from '../components/Pagination'

const ListPage = ({ animals, fetchAnimals, setValues }) => {

  const { loading, error, data, pagination, values } = animals

  const handlePagination = (page) => {
    const newPage = { page: page }
    setValues(newPage)
    fetchAnimals({...values, ...newPage})
  }

  if (loading) {
    return  <h1>loading...</h1>
  } else if (error) {
    return <h1>{error}</h1>
  } else {
    return (
      <div>
        <Pagination pagination={pagination} handlePagination={handlePagination} />
          <AnimalsList data={data} />
        <Pagination pagination={pagination} handlePagination={handlePagination} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  animals: state.animals
})

const mapDispatchToProps = {
  fetchAnimals,
  setValues
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPage)