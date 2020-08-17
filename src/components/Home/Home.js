import React from 'react'
import TopSeasonAnime from './TopSeasonAnime/TopSeasonAnime'
import MostPopularAnime from './TopSeasonAnime/MostPopularAnime'
import RandomAnime from './randomAnime/randomAnime'
import TopCharacters from './Characters/TopCharacters'

function Home() {
    return (
        <>
            <TopSeasonAnime />
            <MostPopularAnime />
            <RandomAnime />
            <TopCharacters />
        </>
    )
}

export default Home