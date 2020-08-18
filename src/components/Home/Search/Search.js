import React, { useEffect, useState } from 'react'

function SearchBar () {
    const [searchValue, setSearchValue] = useState('')
    const anime = 'anime'
    const manga = 'manga'


    


    return (
        <form>
            <label>
                <select>
                    <option value={anime}>Anime</option>
                    <option>Characters</option>
                    <option value={manga}>Manga</option>
                </select>
                <input type="text" value={searchValue} placeholder='Search' onChange={e => setSearchValue(e.target.value)}></input>
            </label>
        </form>
    )
}

export default SearchBar