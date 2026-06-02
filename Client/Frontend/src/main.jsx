import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

if (API_BASE_URL) {
  const originalFetch = window.fetch.bind(window)

  window.fetch = (input, init) => {
    if (typeof input === "string") {
      input = input
        .replace("http://127.0.0.1:8000", API_BASE_URL)
        .replace("http://localhost:8000", API_BASE_URL)
    }

    return originalFetch(input, init)
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)