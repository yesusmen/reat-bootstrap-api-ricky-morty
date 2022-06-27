import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const DetailPage = () => {
    const [character, setCharacter] = useState([])

    let { id } = useParams()

    useEffect(() => {
        async function getCharacterById(){
            const url = `https://rickandmortyapi.com/api/character/${id}`
            const response = await axios.get(url)
            const data = await response.data
            setCharacter(data)
        }

        getCharacterById()

    }, [])

    return (
        <div className='container-fluid p-5 d-flex align-items-center justify-content-center' style={{minHeight: "calc(100vh - 96px)"}}>
            <div className="card mb-3" style={{backgroundColor: "#3C3E44"}}>
                <div className="row g-0 p-5 d-flex align-items-center justify-content-center">
                    <div className="col-md-4">
                        <img src={ character.image } className="rounded-start" width="100%" alt={ character.name } />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h1 className="card-title fw-bold" style={{color: "#FE7E30"}} >{ character.name }</h1>
                            <p className="fs-5 card-text">Status: <strong>{ character.status }</strong></p>
                            <p className="fs-5 card-text">Specie: <strong>{ character.species }</strong></p>
                            <p className="fs-5 card-text">Type: <strong>{ character.type }</strong></p>
                            <p className="fs-5 card-text">Species: <strong>{ character.species }</strong></p>
                            {/* <p className="fs-5 card-text">Origin: <strong>{ character.origin.name }</strong></p> */}
                            {/* <p className="fs-5 card-text">Location: <strong>{ character.location.name }</strong></p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailPage