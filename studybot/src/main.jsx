import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateCourse from './Components/CreateCourse';
import CourseOutline from './Components/CourseOutline';
import Course from './Components/Course'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CreateCourse/>} />
        <Route path='/CourseOutline' element={<CourseOutline/>} />
        <Route path='/Course' element={<Course/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
