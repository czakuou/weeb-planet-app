import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return(
        <header className='header'>
            <Link to='/'>
                <h1 className='web-title'>Weeb-Planet</h1>
            </Link>
            <ul className='nav-list'>
                <Link to='/anime'>
                    <li>Anime</li>
                </Link>
                <Link to='/manga'>
                    <li>Manga</li>
                </Link>
                <Link to="/characters">
                    <li>Characters</li>
                </Link>
                <Link to='/search'>
                    <li>Search</li>
                </Link>
            </ul>
        </header>
    )
}

export default Header