import React from 'react'
import { Route } from 'react-router-dom'
import GlobalStyle from '../styles/GlobalStyle'

import ChoicePage from './ChoicePage'

const App = () => {
  return (
    <div>
      <GlobalStyle />

      <Route path="/" exact component={ChoicePage} />
    </div>
  )
}

export default App
