import React from 'react'
import { connect } from 'react-redux'

import SearchForm from '../components/SearchForm'

const FormPage = () => {
  return (
    <div>
      <SearchForm />
    </div>
  )
}

const mapStateToProps = (state) => ({
  content: state.content
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(FormPage)