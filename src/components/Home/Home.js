import React from 'react'
import TopSeasonAnime from './TopSeasonAnime/TopSeasonAnime'
import MostPopularAnime from './TopSeasonAnime/MostPopularAnime'
import RandomAnime from './randomAnime/randomAnime'

function Home() {
    return (
        <>
            <TopSeasonAnime />
            <MostPopularAnime />
            <RandomAnime />
        </>
    )
}

export default Home