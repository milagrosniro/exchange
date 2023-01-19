import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import './progressBar.scss'

export interface IpropsPorogressBar{
    value: string,
    percentaje?: string
}

const ProgressBar = ({value, percentaje}: IpropsPorogressBar) => {
  const {theme} = useContext(ThemeContext)
  return (
    <div className={theme}>

    <div className={`wrapProgress`}>

    <div className='containerProgress' style={{width:`${percentaje}%`}}>
      <div className='infoProgress'>
        <div className='value'>{value}$</div>
        <div className='percentaje'>{percentaje}%</div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ProgressBar