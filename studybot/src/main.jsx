import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateCourse from './Components/CreateCourse';
import CourseOutline from './Components/CourseOutline';
import Course from './Components/Course'
import Homepage from './Components/Homepage';
import Choice from './Components/Choice';
import './index.css'
import Semcourse from './Components/semcourse';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/choice' element={<Choice/>} />
        <Route path='/semcourse' element={<Semcourse/>} />
        <Route path='/customcourse' element={<CreateCourse/>} />
        {/* <Route path='/chat' element={<Chat/>} /> */}
        <Route path='/CourseOutline/:course' element={<CourseOutline/>} />
        <Route path='/Course' element={<Course/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
