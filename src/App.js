import React from 'react';
import Header from './components/Header/Header'
import HeadImage from './components/Header/HeadImage'
import TopSeasonAnime from './components/currentylAiring/TopSeasonAnime'
import './components/styles/styles.css'
import RandomAnime from './components/randomAnime/randomAnime'

function App() {
  return (
    <>
      <Header />
      <HeadImage />
      <TopSeasonAnime />
      <RandomAnime />
    </>
  )
}


export default App;
