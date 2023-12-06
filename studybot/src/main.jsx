import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sy_submit from './Components/sy_submit';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Sy_submit/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
