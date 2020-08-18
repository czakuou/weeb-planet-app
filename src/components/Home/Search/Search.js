import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'

const optionSearch = [
    {value: 'anime', label: 'anime'},
    {value: 'manga', label: 'manga'},
    {value: 'character', label: 'character'}
]

function SearchBar () {
    const [searchData, setSearchData] = useState()
    const [searchValue, setSearchValue] = useState('')
    const [category, setCategory] = useState(optionSearch[0].value)

    //get search data
    const getData = async () => {
        let link = `https://private-anon-a94c3ea598-jikan.apiary-proxy.com/v3/search/${category.value}?q=${searchValue}&page=1`
        console.log(link)
        try{
            const response = await fetch(link)
            const data = response.json()
                .then(data => {
                    setSearchData(data.results)
                })}catch (error){
                    console.log(error)
                }
    }


    //handle search button
    function handleClick(e){
        e.preventDefault()
        console.log(searchValue)
        console.log(category.value)
        getData()
    }


    function searchBox() {
        if(searchData !== undefined){
            const dataArr = []
            for (let i=0; i<searchData.length;i++){
                dataArr.push(searchData[i])
            }
            return (
                <div>
                    { dataArr.map((element, i) => {
                        return (
                            <div className='topCharacter-box' key={i}>
                            <a className='topCharacter-box__img' href={element.url} target='_blank'><img className='topCharacter-box__img'  src={element.image_url} alt='img' /></a>
                            <h1>{element.title}</h1>
                        </div>
                        )
                    } ) }
                </div>
            )
        }
        else {
            return(
                <h1>Search results</h1>
            )
        }
    }

    return (
        <>
        <form>
            <label>
                <Select 
                    options={optionSearch}
                    className='select'
                    placeholder='anime'
                    onChange={setCategory}
                />
                <input type="text" value={searchValue} placeholder='Search' onChange={e => setSearchValue(e.target.value)}></input>
            </label>
            <button  onClick={handleClick}>Search</button>
        </form>
        <div>
            {searchBox()}
        </div>
        </>
    )
}

export default SearchBar