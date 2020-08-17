import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return(
        <header className='header'>
            <h1 className='web-title'>Weeb-Planet</h1>
            <ul className='nav-list'>
                <a href="" value='anime'><li>Anime</li></a>
                <a href="https://weeb-planet.netlify.app/characters" value='manga'><li>Manga</li></a>
                <Link to="/characters">
                    <li>Characters</li>
                </Link>
            </ul>
            <form className='search-form'>
                <label className='search-label'>
                    <select className='search-bar'>
                        <option value="anime">Anime</option>
                        <option value='manga'>Manga</option>
                        <option value="character">Character</option>
                    </select>
                     <input type="text" name="text" className='search-bar' />
                </label>
                     <button type="submit" className='search-submit'></button>
            </form>
        </header>
    )
}

export default Header