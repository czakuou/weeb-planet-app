import React from 'react'
import TopSeasonAnime from './TopSeasonAnime/TopSeasonAnime'
import MostPopularAnime from './TopSeasonAnime/MostPopularAnime'
import RandomAnime from './randomAnime/randomAnime'
import TopCharacters from './Characters/TopCharacters'
import MostPopularManga from './manga/MostPopularManga'

function Home() {
    return (
        <>
            <TopSeasonAnime />
            <MostPopularAnime />
            <RandomAnime />
            <TopCharacters />
            <MostPopularManga />
        </>
    )
}

export default Home