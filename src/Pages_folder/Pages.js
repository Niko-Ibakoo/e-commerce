import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import ProductDetails from '../components/ProductDetails'
const Pages = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/test/:id' element={<ProductDetails/>}/>
    </Routes>
  )
}

export default Pages