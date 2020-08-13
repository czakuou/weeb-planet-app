import React from 'react'

function Header() {
    return(
        <header className='header'>
            <h1 className='web-title'>Weeb-Planet</h1>
            <ul className='nav-list'>
                <a href="#" value='#'><li>Anime</li></a>
                <a href="#" value='#'><li>Manga</li></a>
                <a href="#" value='#'><li>Characters</li></a>
            </ul>
            <form className='search-form'>
                <label className='search-label'>
                    <select className='search-type'>
                        <option value="anime">Anime</option>
                        <option value='manga'>Manga</option>
                        <option value="character">Character</option>
                    </select>
                    <input type="text" name="text" className='search-bar' />
                </label>
                <input type="submit" value='search' className='search-submit' />
            </form>
            <div className='account'>
                <a className='login' href="#">Login</a>
                <a className='signUp' href="#">Sign Up</a>
            </div>
        </header>
    )
}

export default Header