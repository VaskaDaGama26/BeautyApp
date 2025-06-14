import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './reset.css'
import './main.scss'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
