import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return(
        <header className='header'>
            <h1 className='web-title'>Weeb-Planet</h1>
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