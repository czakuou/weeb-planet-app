import React, { useState, useEffect } from 'react'

function Characters() {

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
                <>
                    { charactersArr.map( (element, i) => <h1 key={i}>{element.title}</h1> ) }
                </>
            )
        }
        else {
            return (
                <h1>Loading</h1>
            )
        }
    }

    console.log(topCharacters)
    return (
        <div>
            <h1>dupa</h1>
            {topCharactersBox(3)}
        </div>
    )
}

export default Characters