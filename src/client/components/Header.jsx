import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
    return (
        <nav>
            <Link to="/">Brooklyn Longhurst</Link>
            <Link to="/testimonials">Testimonials</Link>   
            <Link to="/clients">Clients</Link>    
            <Link to="/contact">Contact</Link>
        </nav>
    )
}

export default Header