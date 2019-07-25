import React from 'react'
import { Route } from 'react-router-dom'
import GlobalStyle from '../styles/GlobalStyle'

import ChoicePage from './ChoicePage'
import FormPage from './FormPage'
import ListPage from './ListPage'

const App = () => {
  return (
    <div>
      <GlobalStyle />

      <Route path="/" exact component={ChoicePage} />
      <Route path="/form" component={FormPage} />
      <Route path="/list" component={ListPage} />
    </div>
  )
}

export default App
