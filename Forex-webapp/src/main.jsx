import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'animate.css';



import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css'
import './assets/css/btn-style.css'
import './assets/css/responsive.css'
import './assets/css/style.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
