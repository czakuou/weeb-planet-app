import React, { useEffect, useState } from 'react'

function SearchBar () {
    const [searchValue, setSearchValue] = useState('')
    const anime = 'anime'
    const manga = 'manga'


    const getData = async () => {
        try{
            const response = await fetch(`https://private-anon-a94c3ea598-jikan.apiary-proxy.com/v3/search/anime?q${searchValue}`)
            const data = response.json()
                .then(data => {
                    console.log(data)
                })}catch (error){
                    console.log(error)
                }
    }

    useEffect(() =>{
        getData()
    }, [searchValue])


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