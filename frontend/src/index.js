import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>, 
  document.getElementById('root')
)