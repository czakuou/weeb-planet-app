import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return(
        <header className='header'>
            <Link to='/'>
                <h1 className='web-title'>Weeb-Planet</h1>
            </Link>
            <ul className='nav-list'>
                <Link to='/'>
                    <li>Home</li>
                </Link>
                <Link to='/manga'>
                    <li>About</li>
                </Link>
            </ul>
        </header>
    )
}

export default Header