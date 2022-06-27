import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'

import Navbar from './components/Navbar'
import AboutPage from './pages/AboutPage'
import DetailPage from './pages/DetailPage'
import HomePage from './pages/HomePage'

const App = () => {

  return (
    <div className='bg-dark text-white'>
      <Navbar />
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/about' element={ <AboutPage/> } />
        <Route path='/details/:id' element={<DetailPage />}>
          <Route path=':id' />
        </Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
