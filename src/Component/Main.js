import React from 'react'
import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import ProductManage from '../Pages/ProductManage'
import OrderManage from '../Pages/OrderManage'
import Dashboard from '../Pages/Dashboard'
import CalenderDateView from '../Pages/CalenderDateView'

const Main = () => {
  return (
    <div>
        <div>
            <Navbar/>
        </div>
        <div>
            <Routes>
                <Route path='/' element={<Dashboard/>}/>
                <Route path='/ProductManag' element={<ProductManage/>}/>
                <Route path='/OrderManag' element={<OrderManage/>}/>
                <Route path='/CalenderDateView' element={<CalenderDateView/>}/>
            </Routes>
        </div>
    </div>
  )
}

export default Main