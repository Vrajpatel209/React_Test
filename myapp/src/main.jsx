import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContactManagementForm } from './ContactManagementForm.jsx'
import RouterAPI from './RouterAPI.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <ContactManagementForm /> */}
    <RouterAPI />
  </React.StrictMode>,
)
