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
            getData()
            return (
                <h1>Waiting for server response</h1>
            )
        }
    }
    
    //handle user input
    const [characterNumber, setCharacterNumber] = useState('')
    const [showChar, setShowChar] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()
        setShowChar(true)
    }
    //hide boxes while user is typing
    const change = e => {
        setShowChar(false)
        setCharacterNumber(e.target.value)
    }
    return (
        <section className='topCharacters-section'>
            <h1 className='topCharacters-section__title'>Top Characters</h1>
            <form className='topCharacters-form' onSubmit={handleSubmit}>
                <label>How many characters should I show?(1-50)</label>
                <input type='number' max='50' required value={characterNumber} onChange={change}></input>
                <input type='submit' value='Show Characters' />
            </form>
            <div className='characters-boxes'>
                {showChar ? topCharactersBox(characterNumber) : null}
            </div>
        </section>
    )
}

export default TopCharacters