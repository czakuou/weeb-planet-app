import React, { useEffect, useState } from 'react'

function RandomAnime() {
    const [randomAnimeData, setRandomAnimeData] = useState()
    let {title, image_url, type, status, premiered, rating, score, synopsis} = {
        title: 'Loading',
        image_url: 'Loading',
        type: 'Loading',
        status: 'Loading',
        premiered: 'Loading',
        rating: 'Loading',
        score: 'Loading',
        synopsis: 'Loading',
    }


    //random anime generator
    const random = Math.floor(Math.random() * (9500 - 1 + 1) + 1); //generate random number between 0-10000
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

    //handling errors if random id is valid
    if(randomAnimeData !== undefined){
        do{
            if(randomAnimeData !== undefined &&  randomAnimeData.error) getData()
            else if(randomAnimeData !== undefined && randomAnimeData.error === null) getData()
            else{
                title = randomAnimeData.title
                image_url = randomAnimeData.image_url
                type = randomAnimeData.type
                status = randomAnimeData.status
                premiered = randomAnimeData.premiered
                rating = randomAnimeData.rating
                score = randomAnimeData.score
                synopsis = randomAnimeData.synopsis
            }
        }while(randomAnimeData.error === null && randomAnimeData.error)
    }

  
    console.log(randomAnimeData)



    return (
        <>
            <h1>Random Anime Generator</h1>
            <div className="random-anime__box">
                <h1>{title}</h1>
                <img src={image_url} alt='Loading'></img>
                <p>{type}</p>
                <p>{status}</p>
                <p>{premiered}</p>
                <p>{rating}</p>
                <p>{score}</p>
                <p>{synopsis}</p>
                <button onClick={getData} type='button'>Random</button>
            </div>
        </>
    )
}

export default RandomAnime