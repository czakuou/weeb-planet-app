import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import settings from './sliderSettings'

function MostPopularAnime() {
    const [mostPopularAnimeData, setMostPopularAnimeData] = useState()


    //fetch Top Anime Data
    const getData = async () => {
        try {
            const response = await fetch('https://private-anon-a94c3ea598-jikan.apiary-proxy.com/v3/top/anime')
            const data = await response.json()
                .then(data => {
                    setMostPopularAnimeData(data.top)
                })
        }catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    //anime box
    function animeDataBox(id) {

        if(mostPopularAnimeData !== undefined){
            const img = `url("${mostPopularAnimeData[id].image_url}")`
            return(
                    <div className='top-airing-section__div'>
                        <a style={{ backgroundImage: img }} className='top-airing-section__box' href={mostPopularAnimeData[id].url} target="_blank">
                            <p>{mostPopularAnimeData[id].title}</p>
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
        <h1 className='airing-h'>Most Popular Anime</h1>
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

export default MostPopularAnime