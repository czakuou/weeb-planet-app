import React, { useState, useEffect } from 'react'

function TopCharacters() {
    const [topCharacters, setTopCharacter] = useState()


    //fetch Top characters Data
    const getData = async () => {
        try {
            const response = await fetch('http://api.jikan.moe/v3/top/characters')
            const data = await response.json()
                .then(data => {
                    setTopCharacter(data.top)
                })
        }catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    //generate box for character data
    function topCharactersBox(id) {
        if (topCharacters !== undefined){
            const charactersArr = []
            for(let i=0;i<id;i++){
                charactersArr.push(topCharacters[i])
            }
            return (
                <div>
                    { charactersArr.map( (element, i) => {
                        return(
                        <div className='topCharacter-box' key={i}>
                            <a className='topCharacter-box__img' href={element.url} target='_blank'><img className='topCharacter-box__img'  src={element.image_url} alt='img' /></a>
                            <h1>{element.title}</h1>
                            <p>Rank: {element.rank}</p>
                        </div>)
                    } ) } 
                </div>
            )
        }
        else {
            return (
                <h1>Waiting for server response</h1>
            )
        }
    }
    

    return (
        <section className='topCharacters-section'>
            <h1 className='topCharacters-section__title'>Top 5 Characters</h1>
            <div className='characters-boxes'>
                {topCharactersBox(5)}
            </div>
        </section>
    )
}

export default TopCharacters