import footerLogo from '../assets/footer-logo.png'
import React from 'react'

const Footer = () => {
  return (
    <footer className='footer'>
        <img src={footerLogo} alt="footer logo" className='footerLogo'/>
        <p>© 2024 Recipe Book App</p>
    </footer>
  )
}
export default Footer