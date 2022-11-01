import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav role="navigarion" className="Navbar" aria-label="Main">
        <ul>
            <Link to="/">
                info
            </Link>
        </ul>
    </nav>
  )
}

export default Navbar