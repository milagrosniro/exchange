import React from 'react'
import './card.scss'

interface IPropsCard{
    width: string
    height: string
    children?: JSX.Element | JSX.Element[]
}
const Card = ({width, height, children}: IPropsCard) => {
  return (
    <div className='container-card' style={{width, height}}>
      {children ?? children}
    </div>
  )
}

export default Card