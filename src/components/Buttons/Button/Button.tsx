import React, { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import qr from '../../../images/QRWHITE1.png'
import './button.scss'

interface IBtnProps{
  color: string,
  onClick?: ()=>void,
  img?: string,
  title: string,
  width: string,
  height: string,
  text: string
}

const Button = ({color,onClick,img,title, width, height, text}:IBtnProps) => {
  const {theme} = useContext(ThemeContext)

  return (
    <button onClick={onClick ? onClick : ()=>{}} style={{backgroundColor: color, color: text, width:'auto', height:'auto', border: `1px solid ${color}`, padding:`0.5rem 1rem`, display:'flex'}} className={theme}>
        <div className='wrapBtn'>
        {img !== undefined && <span><img src={qr} alt='logoQR' style={theme === 'dark' ? {filter: 'invert(1)'}:{}}/></span>  }

       <p>{title}</p>
        </div>
        </button>
  )
}

export default Button