import React, { useState, useEffect } from 'react'
import variables from './styles/TopSeasonAnime.sass'

function TopairingAnime() {
    const [airingAnimeData, setairingAnimeData] = useState()

    //fetch airing anime airing data
    useEffect(() => {
        fetch('https://private-anon-d58a107d8f-jikan.apiary-proxy.com/v3/top/anime/1/airing')
            .then(res => res.json())
            .then(data => {
                setairingAnimeData(Object.assign({}, data))
            })
            .catch(err => console.error(`can't acces data`))
    }, [])

    //Box of anime containing img, title, url to MAL and score
    function animeDataBox(id) {

        if(airingAnimeData !== undefined){
            const img = `url("${airingAnimeData.top[id].image_url}")`
            return(
                    <a style={{ backgroundImage: img }} className='top-airing-section__box' href={airingAnimeData.top[id].url} target="_blank">
                        <p>{airingAnimeData.top[id].title}</p>
                    </a>
            )}
    }



    return (
        <section className='top-airing-section'>
            {animeDataBox(0)}
            {animeDataBox(1)}
            {animeDataBox(2)}
            {animeDataBox(3)}
            {animeDataBox(4)}
        </section>
    )
}

export default TopairingAnime