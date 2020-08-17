import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import settings from '../TopSeasonAnime/sliderSettings'

function MostPopularManga() {
    const [mostPopularMangaData, setmostPopularMangaData] = useState()


    //fetch Top  Data
    const getData = async () => {
        try {
            const response = await fetch('https://private-anon-a94c3ea598-jikan.apiary-proxy.com/v3/top/manga')
            const data = await response.json()
                .then(data => {
                    setmostPopularMangaData(data.top)
                })
        }catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    //anime box
    function mangaDataBox(id) {

        if(mostPopularMangaData !== undefined){
            const img = `url("${mostPopularMangaData[id].image_url}")`
            return(
                    <div className='top-airing-section__div'>
                        <a style={{ backgroundImage: img }} className='top-airing-section__box' href={mostPopularMangaData[id].url} target="_blank">
                            <p>{mostPopularMangaData[id].title}</p>
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
                {mangaDataBox(0)}
                {mangaDataBox(1)}
                {mangaDataBox(2)}
                {mangaDataBox(3)}
                {mangaDataBox(4)}
                {mangaDataBox(5)}
                {mangaDataBox(6)}
                {mangaDataBox(7)}
                {mangaDataBox(8)}
                {mangaDataBox(9)}
                {mangaDataBox(10)}
                {mangaDataBox(11)}
                {mangaDataBox(12)}
                {mangaDataBox(13)}
                {mangaDataBox(14)}
        </Slider>
        </>
    )

}

export default MostPopularManga