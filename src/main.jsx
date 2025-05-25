import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SunanKalijagaPage from './Component/web-pai.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SunanKalijagaPage />
  </StrictMode>,
)
