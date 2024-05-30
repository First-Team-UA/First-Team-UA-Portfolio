import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import './Language/SwitcherLng/i18n';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename='/First-Team-UA-Portfolio'>
    <App />
    </BrowserRouter>
  </React.StrictMode>
)
