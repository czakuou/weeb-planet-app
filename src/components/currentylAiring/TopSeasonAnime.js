import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import settings from './sliderSettings'

function TopairingAnime() {
    const [airingAnimeData, setairingAnimeData] = useState()
    
     //fetch airing anime airing data
     const getData = async () => {
        const response = await fetch('https://private-anon-d58a107d8f-jikan.apiary-proxy.com/v3/top/anime/1/airing')
        const data = await response.json()
            .then(data => {
                setairingAnimeData(Object.assign({}, data))
            })
            .catch(err => console.error(`can't acces data`))
    }

    useEffect(() =>{
        getData()
    }, [])

    //Anime box generator
    function animeDataBox(id) {

        if(airingAnimeData !== undefined){
            const img = `url("${airingAnimeData.top[id].image_url}")`
            return(
                <div className='top-airing-section__div'>
                    <a style={{ backgroundImage: img }} className='top-airing-section__box' href={airingAnimeData.top[id].url} target="_blank">
                        <p>{airingAnimeData.top[id].title}</p>
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
        <h1 className='airing-h'>Currently Airing</h1>
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