import React from 'react'

function Footer() {
    const date = new Date()
    const year = date.getFullYear()

    return ( <footer>
    <h5> © {year} by Glenn Dutton Consulting
    </h5>
    </footer>)
}

export default Footer