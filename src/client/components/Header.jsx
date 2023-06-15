import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
    return (
        <nav>
            <Link to="/" className='link'>Glenn Dutton Consulting</Link>
            <Link to="/testimonials" className='link'>Testimonials</Link>   
            <Link to="/clients" className='link'>Clients</Link>    
            <Link to="/contact" className='link'>Contact</Link>
        </nav>
    )
}

export default Header