import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './reset.css'
// import './App.css'
import { CartProvider } from './components/CartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
    <App />
    </CartProvider>
  </React.StrictMode>,
)
