import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import ShowMore from 'react-show-more'



const optionSearch = [
    {value: 'anime', label: 'anime'},
    {value: 'manga', label: 'manga'},
    {value: 'character', label: 'character'}
]
let numberr = 8
let itemPage =0

function SearchBar () {
    const [searchData, setSearchData] = useState()
    const [searchValue, setSearchValue] = useState('')
    const [category, setCategory] = useState(optionSearch[0])
    const [number, setNumber] = useState(numberr)
    const [searchPage, setSearchPage] = useState(itemPage)

    //get search data
    const getData = async () => {
        let link = `https://private-anon-a94c3ea598-jikan.apiary-proxy.com/v3/search/${category.value}?q=${searchValue}&page=1`
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
        setNumber(8)
        getData()
    }

    //generate results boxes
    const searchBox = (number) => {
        if(searchData !== undefined){
            const dataArr = []
            for (let i=searchPage; i<searchData.length && i<number;i++){
                dataArr.push(searchData[i])
            }
            return (
                <div className='boxes'>
                    { dataArr.map((element, i) => {
                        return (
                        <div className='seachSeries-box' key={i}>
                            <a className='search-img' href={element.url} target='_blank'><img className='search-img'  src={element.image_url} alt='img' /></a>
                            <h1 className='search-box__h1'>{element.title}</h1>
                        </div>
                        )
                    } ) }
                </div>
            )
        }
        else {
            return(
                <h1 className='search-box__h1'>Search results</h1>
            )
        }
    }
  
    //prev and next search results buttons
    useEffect(()=>{
        searchBox(number)
    },[number])

    function handleClickNext() {
        setSearchPage(searchPage+8)
        setNumber(number+8)
    }
    function handleClickPrev() {
        setSearchPage(searchPage-8)
        setNumber(number-8)
    }

    return (
        <div className='search-section'>
        <form>
            <div>
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
            </div>
        </form>
        <div className='search-box'>
            <button onClick={handleClickPrev} disabled={searchPage <= 0} type="button" >Prev</button>
            {searchBox(number)}
            <button onClick={handleClickNext} type="button" >Next</button>
        </div>
            <div className='button-meor'>
            </div>
        </div>
    )
}

export default SearchBar