import React from 'react'
import IconGitHub from '../assets/img/icon_github.svg'
import IconTwitter from '../assets/img/icon_twitter.svg'
import IconLinkedIn from '../assets/img/icon_linkedin.svg'
import LogoNetlify from '../assets/img/netlify.svg'
import Propiedad from '../assets/img/icon_developer.svg'

const Footer = () => {
  return (
    <div className='py-5'>
        <div className='d-flex align-items-center justify-content-center'>
            <a href="https://github.com/yesusmen" target="_blank">
                <img src={IconGitHub} alt="Icon Github" className='img-fluid ms-2' width={40} />
            </a>
            <a href="https://twitter.com/AraujoYesusmen" target="_blank">
                <img src={IconTwitter} alt="Icon Github" className='img-fluid ms-2' width={40} />
            </a>
            <a href="https://www.linkedin.com/in/yesusmen/" target="_blank">
                <img src={IconLinkedIn} alt="Icon Github" className='img-fluid ms-2' width={35} />
            </a>
        </div>
        <a href="https://www.netlify.com/" target="_blank" className='text-decoration-none text-light'>
            <div className='d-flex align-items-center justify-content-center mt-3'>
                <img src={LogoNetlify} alt="Logo netlify" className='mx-3'  width={40}/>
                <p className='fs-6 text-light  p-0 m-0'> Deploy by Netlify</p>
            </div>
        </a>
        <div className='d-flex align-items-center justify-content-center mt-3'>
            <img src={Propiedad} alt="icon propiedad intelectual" className='img-fluid' width={40} />
            <p className='p-0 m-0 ms-2'>
                by 
                <a href="https://portafolio-yesus.netlify.app/" target="_blank" className='text-decoration-none text-light'>
                    <strong className='mx-2'>Ing. Jesús E. Araujo G.</strong> 
                </a>
                2022
            </p>
        </div>
    </div>
  )
}

export default Footer