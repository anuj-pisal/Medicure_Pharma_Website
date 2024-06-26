import React from 'react'
import Home from './Webpages/Home.js'
import Med from './Webpages/Med.js'
import './App.css'
import {Route, Routes, BrowserRouter} from 'react-router-dom'

export default function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path='/medicines' element={<Med/>} />
  </Routes>
  </BrowserRouter>
  );
}
