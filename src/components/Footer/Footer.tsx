import React from 'react'
import './footer.scss'
import logo from '../../images/logoRosa.png'
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';


const Footer = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <footer className={`footer-${theme}`} >
        <div className={`footer-container ${theme}`}>
        <div className="logo">
        <img src={logo} alt='logo' width={100}/>
        </div>
        <div>
            <div>Company</div>
            <p>Terms & Service</p>
            <p>Privacy Policy</p>
            <p>About</p>
            <p>Careers</p>
        </div>
        <div>
            <div>About Us</div>
            <p>The Team</p>
            <p>Whitepaper</p>
            <p>Blog</p>
            <p>Contact</p>
        </div>
        </div>
        <div className={`footer-less-${theme}`}>Copyright © 2022 FXNET - FZE. All Rights Reserved.</div>
    </footer>
  )
}

export default Footer