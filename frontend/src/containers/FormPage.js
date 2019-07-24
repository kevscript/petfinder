import React from 'react'
import { connect } from 'react-redux'

import FormikForm from '../components/FormikForm'

const FormPage = ({ content }) => {

  const { loading, error } = content

  if (loading) {
    return  <h1>loading...</h1>
  } else if (error) {
    return <h1>{error}</h1>
  } else {
    return <FormikForm content={content}/>
  }
}

const mapStateToProps = (state) => ({
  content: state.content
})


export default connect(mapStateToProps, null)(FormPage)