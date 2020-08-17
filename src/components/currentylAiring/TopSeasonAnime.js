import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import settings from './sliderSettings'

function TopairingAnime() {
    const [airingAnimeData, setairingAnimeData] = useState() //fetched data
    
     //fetch season anime data
     const getData = async () => {
        try{
            const response = await fetch('https://private-anon-a94c3ea598-jikan.apiary-proxy.com/v3/season')
            const data = await response.json()
                .then(data => {
                    setairingAnimeData(Object.assign({}, data))
                })
                }catch (err) {
                    console.log(err)
                }
    }

    useEffect(() =>{
        getData()
    }, [])

    //Anime box generator
    function animeDataBox(id) {

        if(airingAnimeData !== undefined){
            const img = `url("${airingAnimeData.anime[id].image_url}")`
            return(
                    <div className='top-airing-section__div'>
                        <a style={{ backgroundImage: img }} className='top-airing-section__box' href={airingAnimeData.anime[id].url} target="_blank">
                            <p>{airingAnimeData.anime[id].title}</p>
                        </a>
                    </div>
            )}
        else{
            return(
                <h1 className='top-airing-section__box'>LOADING</h1>
            )
        }
    }
    
    
    return (
        <>
        <h1 className='airing-h'>Current Season</h1>
            <Slider className='top-airing-section'  {...settings}>
                {animeDataBox(0)}
                {animeDataBox(1)}
                {animeDataBox(2)}
                {animeDataBox(3)}
                {animeDataBox(4)}
                {animeDataBox(5)}
                {animeDataBox(6)}
                {animeDataBox(7)}
                {animeDataBox(8)}
                {animeDataBox(9)}
                {animeDataBox(10)}
                {animeDataBox(11)}
                {animeDataBox(12)}
                {animeDataBox(13)}
                {animeDataBox(14)}
          </Slider>
        </>
    )
}

export default TopairingAnime