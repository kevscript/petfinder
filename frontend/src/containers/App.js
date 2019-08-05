import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchTypes } from '../actions'
import GlobalStyle from '../styles/GlobalStyle'

import MainPage from './MainPage'
import AnimalPage from './AnimalPage'

const App = ({ fetchTypes }) => {

  useEffect(() => {
    fetchTypes()
  }, [])

  return (
    <div>
      <GlobalStyle />
      <Route path="/" exact component={MainPage} />
      <Route path="/animal/:id" component={AnimalPage} />
    </div>
  )
}

const mapDispatchToProps = {
  fetchTypes
}

export default connect(null, mapDispatchToProps)(App)
