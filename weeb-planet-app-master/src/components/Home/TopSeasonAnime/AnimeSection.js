import React from 'react'
import TopSeasonAnime from './TopSeasonAnime'
import MostPopularAnime from './MostPopularAnime'
import TopairingAnime from './TopSeasonAnime'
import RandomAnime from '../randomAnime/randomAnime'

function AnimeSection() {
    return (
        <>
            <TopairingAnime />
            <MostPopularAnime />
            <RandomAnime />
        </>
    )
}

export default AnimeSection