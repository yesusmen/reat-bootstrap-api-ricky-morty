import React from 'react'
import Headerimg from '../assets/img/header_rick_marty.jpg'

const Header = () => {
  return (
    <div>
        <img src={Headerimg} alt="Rick and Morty" className='img-fluid' />
    </div>
  )
}

export default Header