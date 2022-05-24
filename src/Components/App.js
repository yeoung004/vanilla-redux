import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Detail from '../routes/Detail'
import Home from '../routes/Home'

export const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/:id' element={<Detail />}/>
      </Routes>
    </BrowserRouter>
  )
}