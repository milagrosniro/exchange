import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import qr from '../../images/QRWHITE1.png'
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
  const {theme, handleTheme} = useContext(ThemeContext)
  //handleTheme
  console.log(theme, 'THEME')
  return (
    <button onClick={onClick ? onClick : ()=>{}} style={{backgroundColor: color, color: text, width, height, border: `1px solid ${color}`}} className={theme}>
        <div className='wrapBtn'>
        {img !== undefined && <span><img src={qr} alt='logoQR'/></span>  }

       <p>{title}</p>
        </div>
        </button>
  )
}

export default Button