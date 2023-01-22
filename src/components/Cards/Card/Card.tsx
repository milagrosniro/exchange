import React, { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'
import './card.scss'

interface IPropsCard{
    width: string
    height: string
    children?: JSX.Element | JSX.Element[]
}
const Card = ({width, height, children}: IPropsCard) => {
  const {theme} = useContext(ThemeContext)
  return (
    <div className={`container-card-${theme}`} style={{width, height}}>
      {children ?? children}
    </div>
  )
}

export default Card