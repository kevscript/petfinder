import React from 'react'
import { connect } from 'react-redux'
import { fetchAnimals } from '../actions'

import FormikForm from '../components/FormikForm'

const FormPage = ({ content, fetchAnimals }) => {

  const { loading, error } = content

  const handleAnimals = (query) => {
    fetchAnimals(query)
  }

  if (loading) {
    return  <h1>loading...</h1>
  } else if (error) {
    return <h1>{error}</h1>
  } else {
    return <FormikForm content={content} handleAnimals={handleAnimals} />
  }
}

const mapStateToProps = (state) => ({
  content: state.content
})

const mapDispatchToProps = {
  fetchAnimals
}

export default connect(mapStateToProps, mapDispatchToProps)(FormPage)