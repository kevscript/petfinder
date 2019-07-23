import React from 'react'
import { Route } from 'react-router-dom'
import GlobalStyle from '../styles/GlobalStyle'

import ChoicePage from './ChoicePage'
import FormPage from './FormPage'

const App = () => {
  return (
    <div>
      <GlobalStyle />

      <Route path="/" exact component={ChoicePage} />
      <Route path="/form" exact component={FormPage} />
    </div>
  )
}

export default App
