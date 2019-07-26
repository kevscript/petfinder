import React from 'react'
import { Route } from 'react-router-dom'
import GlobalStyle from '../styles/GlobalStyle'

import ChoicePage from './ChoicePage'
import FormPage from './FormPage'
import ListPage from './ListPage'
import Header from '../components/Header'

const App = () => {
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

export default App
