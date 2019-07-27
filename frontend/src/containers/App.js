import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchTypes } from '../actions'
import GlobalStyle from '../styles/GlobalStyle'

import ChoicePage from './ChoicePage'
import FormPage from './FormPage'
import ListPage from './ListPage'
import Header from '../components/Header'

const App = ({ fetchTypes }) => {

  useEffect(() => {
    fetchTypes()
  }, [])

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Route path="/" exact component={ChoicePage} />
      <Route path="/form" component={FormPage} />
      <Route path="/list" component={ListPage} />
    </div>
  )
}

const mapDispatchToProps = {
  fetchTypes
}

export default connect(null, mapDispatchToProps)(App)
