import React from 'react'
import TopSeasonAnime from './TopSeasonAnime/TopSeasonAnime'
import MostPopularAnime from './TopSeasonAnime/MostPopularAnime'
import RandomAnime from './randomAnime/randomAnime'
import TopCharacters from './Characters/TopCharacters'
import MostPopularManga from './manga/MostPopularManga'
import SearchBar from './Search/Search'

function Home() {
    return (
        <>
            <SearchBar />
            <TopSeasonAnime />
            <MostPopularAnime />
            <RandomAnime />
            <TopCharacters />
            <MostPopularManga />
        </>
    )
}

export default Home