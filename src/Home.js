import React from 'react'
import TopSeasonAnime from './components/currentylAiring/TopSeasonAnime'
import RandomAnime from './components/randomAnime/randomAnime'

function Home() {
    return (
        <>
            <TopSeasonAnime />
            <RandomAnime />
        </>
    )
}

export default Home