import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchAnimal } from '../actions'
import styled from 'styled-components'

const AnimalPage = ({ fetchAnimal, match, animal }) => {

  const { loading, data, error } = animal

  useEffect(() => {
    const id = match.params.id
    fetchAnimal(id)
  }, [fetchAnimal, match.params.id])

  if (loading) {
    return <div>Loading...</div>
  } else if (error) {
    return <div>{error}</div>
  } else if (data) {
    return (
      <div>
        <h1>{data.name}</h1>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  animal: state.animal
})

const mapDispatchToProps = {
  fetchAnimal
}

export default connect(mapStateToProps, mapDispatchToProps)(AnimalPage)