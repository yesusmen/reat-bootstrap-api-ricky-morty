import React from 'react'
import DocIcon from '../assets/img/icon_doc.svg'

const AboutPage = () => {
  return (
    <div className='container p-5' style={{minHeight: "calc(100vh - 96px)"}}>
        <h1>Acerca de...</h1>
        <h2 className='mt-5'>¿Qué es esto?</h2>
        <p className='fs-4 mt-3'>
            La API de Rick and Morty es una API REST(ish) y GraphQL basada en el programa de televisión Rick and Morty. 
            Tendrás acceso a cientos de personajes, imágenes, lugares y episodios. La API de Rick and Morty está llena 
            de información canónica como se ve en el programa de televisión. 
        </p>
        <a href="https://rickandmortyapi.com/documentation/" target="_blank" className='text-decoration-none text-light'>
            <div className='mt-5 d-flex align-items-center'>
                <img src={ DocIcon } alt="Documento Icon" className='img-fluid' width={50} />
                <p className='ml-3'>
                    Consulta la documentación del API
                </p>
            </div>
        </a>
        <h2 className='mt-5'>¿Quién soy yo?</h2>
        <p className='fs-4 mt-3'>
             Soy ingeniero en informático, especializado en el desarrollo de aplicaciones móviles, de escritorio y web. 
             Aplicando las buenas prácticas de codificación y un entusiasta de las nuevas tecnologías. Desde el 2020 he 
             venido trabajando con diferentes framework, inclinándome a VUE y REACT con TAILWINDCSS.
             La tecnología utilizada para el desarrollo de esta app, son las siguientes: REACT, REACT 
             ROUTER, AXIOS, TAILWINDCSS y API REST. Creando el proyecto con VITE.JS 
        </p>
    </div>
  )
}

export default AboutPage