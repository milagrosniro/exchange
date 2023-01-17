import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import Button from '../Button/Button'
import './advanceSecurity.scss'

const AdvanceSecurity = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <div className='containerSubCard_AdvanceSecurity'>

    <div className='containerRightSubCard'>

    <h2>Advanced Security</h2>
    <h3>Login Password</h3>

    <p>Login Password is used to log in to your account </p>


    </div>
    <div className='containerBtns'>
      <div className='wrapBtns'>
      <Button color={'#C4C4C4'} title={'Change'} width={'60%'} height={'50%'} text={theme === 'light' ?`#FFFFFF` : '#3F3D4D'}/>
      </div>
      </div>
    </div>
  )
}

export default AdvanceSecurity