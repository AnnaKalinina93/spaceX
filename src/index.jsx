import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/app/App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { StrictMode } from 'react'
import { createAPI } from './services/api.js'
import { fetchDataAction } from './store/api-action.js'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { reducer } from './store/reduser.js'


const api = createAPI()

const store = configureStore(
  {reducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
      thunk: {
          extraArgument: api,
      },
      }),
  });

store.dispatch(fetchDataAction())

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
