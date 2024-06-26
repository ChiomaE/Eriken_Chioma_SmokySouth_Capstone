import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import CartProvider from './hooks/useCart.jsx'
import './axiosConfig.js'
import { AuthProvider } from './hooks/useAuth.js'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
    <CartProvider>
      <App />
      <ToastContainer 
      position='bottom-right'
      autoClose={3000}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme='light' 
      />
    </CartProvider>
    </AuthProvider>
    
      
    </BrowserRouter>
    
  </React.StrictMode>,
)
