import React, { useState, useEffect } from 'react'

function Characters() {

    const [topCharacters, setTopCharacter] = useState()
    const [characternumber, setCharacterNumber] = useState()


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
                        <div key={i}>
                            <img  src={element.image_url} alt='img' />
                            <h1>{element.title}</h1>
                            <p>Rank: {element.rank}</p>
                        </div>)
                    } ) } 
                </div>
            )
        }
        else {
            return (
                <h1>Waiting</h1>
            )
        }
    }

    console.log(topCharacters)
    return (
        <div>
            <h1>Top Characters</h1>
            <p>How many characters should I show?</p>
            <input type='number'id='characters' name='characters' placeholder='Characters number'></input>
            {topCharactersBox(5)}
        </div>
    )
}

export default Characters