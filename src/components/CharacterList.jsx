import React, { useEffect, useState } from 'react'
import Character from './Character'

function NavPage({page, setPage}){
    return (
        <header className='d-flex justify-content-between align-items-center'>
            <button className='btn btn-warning btn-sm' disabled={page == 1} onClick={() => setPage(page--) }>
                Previous
            </button>
            <p>Page: {page}</p>
            <button className='btn btn-warning btn-sm' onClick={() => setPage(page++) }>
                Next
            </button>
        </header>
    )
}

const CharacterList = () => {
    const [characters, setCharacters] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)

    useEffect(() => {
            async function fetchData(){
            const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
            const data = await response.json()
            setLoading(false)
            setCharacters(data.results)
        }

        fetchData()

    }, [page])

    return (

        <div className='container-fluid p-5'>

            <NavPage page={page} setPage={setPage} />

            {
                loading ? (
                    <h1>Loading...</h1>
                ) : (
                    <div className="row my-5">
                        {
                            characters.map(character => {
                                return (
                                    <div className='col-md-4' key={character.id}>
                                        <Character character={character} />
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            }

            <NavPage page={page} setPage={setPage} />

        </div>
    )
}

export default CharacterList