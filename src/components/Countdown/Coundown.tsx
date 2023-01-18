import React from 'react'
import './countdown.scss'
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const Countdown = () => {
    const {theme} = useContext(ThemeContext)
  return (
    <div className={theme}>
    <div className='titleContainer'>
    <p>Stage-1 </p><span> Countdown</span>
    </div>
</div>
  )
}

export default Countdown