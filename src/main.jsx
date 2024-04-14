import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import { Product } from './components/Product'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Product/>
  </React.StrictMode>,
)
