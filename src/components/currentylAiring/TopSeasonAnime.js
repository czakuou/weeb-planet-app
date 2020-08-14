import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

    //Box of anime containing img, title, url to MAL and score
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

    //Slick Slider Settings
    const settings = {
        arrows: false,
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 11,
        slidesToScroll: 11,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 3350,
            settings: {
              slidesToShow: 9,
              slidesToScroll: 9,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 2650,
            settings: {
              slidesToShow: 8,
              slidesToScroll: 8,
              infinite: true,
              dots: true
            }
          },
            {
                breakpoint: 1850,
                settings: {
                  slidesToShow: 7,
                  slidesToScroll: 7,
                  infinite: true,
                  dots: true
                }
              },
            {
                breakpoint: 1600,
                settings: {
                  slidesToShow: 5,
                  slidesToScroll: 5,
                  infinite: true,
                  dots: true
                }
              },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 970,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 710,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            }
          },
          {
            breakpoint: 480,
            settings: {
                dots: false,
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: false
            }
          }
        ]
      };
    
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