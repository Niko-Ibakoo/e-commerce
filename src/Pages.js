import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import ProductView from './components/ProductView'

const Pages = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/product/:id' element={<ProductView />}/>
    </Routes>
  )
}

export default Pages