import React from 'react'
import './progressBar.scss'

export interface IpropsPorogressBar{
    value: string,
    max?: string
}

const ProgressBar = ({value, max}: IpropsPorogressBar) => {
  return (
    <progress className='containerProgress' value={value} max={max ? max : '100'}>{value}%</progress>
  )
}

export default ProgressBar