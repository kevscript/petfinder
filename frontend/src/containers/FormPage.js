import React from 'react'
import { connect } from 'react-redux'
import { fetchAnimals, setValues } from '../actions'

import FormikForm from '../components/FormikForm'

const FormPage = ({ content, fetchAnimals, setValues }) => {

  const { loading, error } = content

  const handleFormSubmit = (query) => {
    setValues(query)
    fetchAnimals(query)
  }

  if (loading) {
    return  <h1>loading...</h1>
  } else if (error) {
    return <h1>{error}</h1>
  } else {
    return <FormikForm content={content} handleFormSubmit={handleFormSubmit} />
  }
}

const mapStateToProps = (state) => ({
  content: state.content
})

const mapDispatchToProps = {
  fetchAnimals,
  setValues
}

export default connect(mapStateToProps, mapDispatchToProps)(FormPage)