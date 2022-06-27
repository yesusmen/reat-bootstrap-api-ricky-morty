import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/img/rickandmorty.png'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg sticky-top">
        <div className="container-fluid px-5">
            <Link className="navbar-brand" to="/">
                <img src={Logo} alt="logo" className='img-fluid' width={70}/>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar