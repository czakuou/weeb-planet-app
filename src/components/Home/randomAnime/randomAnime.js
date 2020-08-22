import React, { useEffect, useState } from 'react'


function RandomAnime() {
    const [randomAnimeData, setRandomAnimeData] = useState()
    let {title, image_url, type, status, premiered, rating, score, synopsis, url} = { //anime data storage
        title: 'Loading',
        image_url: 'Loading',
        type: 'Loading',
        status: 'Loading',
        premiered: 'Loading',
        rating: 'Loading',
        score: 'Loading',
        synopsis: 'Loading',
        url: "Loading"
    }


    //random anime generator
    const random = Math.floor(Math.random() * (5000 - 1 + 1) + 1); //generate random number between 0-10000
    const getData = async () => {
        try{
        const response = await fetch(`https://private-anon-06941f904f-jikan.apiary-proxy.com/v3/anime/${random}`)
        const data = await response.json()
        .then(data => {
            setRandomAnimeData(Object.assign({}, data))
        })
        }catch(err){
            console.log(err)
        }
    }
    useEffect(() => {
        getData()
    }, [])

    //handling errors if random id is valid and assign generated data
    if(randomAnimeData !== undefined){
        do{
            if(randomAnimeData !== undefined &&  randomAnimeData.error) getData()
            else if(randomAnimeData !== undefined && randomAnimeData.error === null) getData()
            else{
                title = randomAnimeData.title
                image_url = randomAnimeData.image_url
                type = randomAnimeData.type
                status = randomAnimeData.status
                premiered = randomAnimeData.aired.string
                rating = randomAnimeData.rating
                score = randomAnimeData.score
                synopsis = randomAnimeData.synopsis
                url = randomAnimeData.url
            }
        }while(randomAnimeData.error === null && randomAnimeData.error)
    }

    //generate box component
    function animeBox(){
        if(title === 'Loading'){
            return (
                <h1>Loading Data</h1>
            )
        }else{
        return (
            <>
                <a className='random-anime__img' href={url} target="_blank"> <img src={image_url} alt='Loading'></img>More Info</a>
                <p></p>
                <div className='random-anime'>
                    <a href={url} target="_blank"><h1>{title}</h1></a>
                    <p>Type: {type}</p>
                    <p>Score: {score}</p>
                    <p>Status: {status}</p>
                    <p>Premiere: {premiered}</p>
                    <p>{rating}</p>
                    <p className='random-anime__synopsis'>{synopsis}</p>
                    <a className="random-anime__button button" onClick={getData} type='button'>Random</a>
                </div>
            </>
        )}
    }


    return (
        <div className='random-anime__section'>
            <h1 className='airing-h'>Random Anime Generator</h1>
            <div className="random-anime__box">
                {animeBox()}
            </div>
        </div>
    )
}

export default RandomAnime