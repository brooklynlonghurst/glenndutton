import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../screens/Home'
import Testimonials from '../screens/Testimonials'
import Clients from '../screens/Clients'
import Contact from '../screens/Contact'

function Header() {
    return (
        <div>
        <Routes>
            <Route path='/' element={<Home />}>Glenn Dutton</Route>
            <Route path='/testimonials' element={<Testimonials />}>Testimonials</Route>
            <Route path='/clients' element={<Clients />}>Clients</Route>
            <Route path='/contact' element={<Contact />}>Contact</Route>
        </Routes>
        </div>
    )
}

export default Header