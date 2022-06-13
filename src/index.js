import React from 'react'
import './index.css'
import {createRoot} from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import App from './App'
import Stats from './pages/Stats'
const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='stats' element={<Stats />} />
    </Routes>
  </BrowserRouter>
)
