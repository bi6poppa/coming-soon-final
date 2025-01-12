import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './utils/bootstrap.bundle.js'

import 'bootstrap-icons/font/bootstrap-icons.css'
import './styles/bootstrap.css'
import './index.css'
import App from './App.jsx'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
