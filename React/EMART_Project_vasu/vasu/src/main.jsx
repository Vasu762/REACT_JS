import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import Store from '../src/Product_data/Store.jsx'
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
    <Auth0Provider
    domain="dev-5yi7g8n0avbpp4v7.us.auth0.com"
    clientId="IfN7G5V38bkgIgHtk2nPoh3uwPuwB9rx"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
        >
        <App />
      </Auth0Provider>
    </Provider>
  </React.StrictMode>,
)
