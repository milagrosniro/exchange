import React, { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext';

import './burguer.scss';

interface IPropsBurguer{
    onClick: () => void
}

const Burger = ({onClick}: IPropsBurguer) => {
    const {theme} = useContext(ThemeContext)
  return (
    <div className='burguerWrap' onClick={onClick}>

    <div className={`containerBurguer-${theme}`}>
      <div />
      <div />
      <div />
    </div>
    </div>
  )
}

export default Burger;

