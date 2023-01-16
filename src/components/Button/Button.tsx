import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import qr from '../../images/QRWHITE1.png'
import './button.scss'

interface IBtnProps{
  color: string,
  onClick?: ()=>void,
  img?: string,
  title: string
}

const Button = ({color,onClick,img,title}:IBtnProps) => {
  const {theme, handleTheme} = useContext(ThemeContext)
  //handleTheme
  console.log(theme, 'THEME')
  return (
    <button onClick={onClick ? onClick : ()=>{}} style={{color}}>
        <div className='wrapBtn'>
        {img ?? <span><img src={qr} alt='logoQR'/></span>  }

        {title}
        </div>
        </button>
  )
}

export default Button