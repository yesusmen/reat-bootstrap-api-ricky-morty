import React from 'react'
import { Link } from 'react-router-dom'
const Character = ({ character }) => {

  return (
    <div className="card mb-3 border-dark" style={{maxLines: "18rem"}}>
      <div className="row g-0" style={{ backgroundColor: "#3C3E44" }}>
        <div className="col-md-4">
          <img src={character.image} className="img-fluid rounded-start" width="100%" alt={character.name} />
        </div>
          <div className="col-md-8">
            <div className="card-body">
              <Link to={'/details/'+character.id} className="text-decoration-none text-white">
                <h5 className="card-text fw-bold">{ character.name }</h5>
              </Link>
              <div className='d-flex align-items-center'>
                {character.status === 'Alive' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="text-success" width={20} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clipRule="evenodd" />
                  </svg>
                ) :  character.status === 'Dead' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="text-danger" width={20} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-7.536 5.879a1 1 0 001.415 0 3 3 0 014.242 0 1 1 0 001.415-1.415 5 5 0 00-7.072 0 1 1 0 000 1.415z" clipRule="evenodd" />
                  </svg>
                ): (
                  <svg xmlns="http://www.w3.org/2000/svg" className="text-secondary" width={20} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-7.536 5.879a1 1 0 001.415 0 3 3 0 014.242 0 1 1 0 001.415-1.415 5 5 0 00-7.072 0 1 1 0 000 1.415z" clipRule="evenodd" />
                  </svg>
                )}
                <p className='card-text ms-1'>
                  {                 
                    `${character.status} - ${character.species}` 
                  }
                </p>

              </div>
              <div className='mt-2'>
                <p className='text-secondary p-0 m-0'>Last known location:</p>
                <p className="card-text">{ character.location.name }</p>
              </div>
              <div className='mt-2'>
                <p className='text-secondary p-0 m-0'>First seen in:</p>
                <p className="card-text">{ character.origin.name }</p>
              </div>
            </div>
          </div>
      </div>
    </div>      
  )
}

export default Character