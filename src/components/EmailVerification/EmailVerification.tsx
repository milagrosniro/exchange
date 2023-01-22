import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import Button from '../Buttons/Button/Button'
import './emailVerificaction.scss'

const EmailVerification = () => {
  const {theme} = useContext(ThemeContext)

  return (
    <div className={theme}>

    <div className={`containerSubCard_emailVerification`}>

    <div className='containerRightSubCard'>

    <h2>Email address verification</h2>

    <p>Protect your account and transactions <span>tx****@gmail.com</span></p>


    </div>
    <div className='containerBtns'>
      <div className='wrapBtns'>
        <Button color={'#C4C4C4'} title={'Change'} width={'60%'} height={'50%'} text={theme === 'light' ?`white` : '#3F3D4D'}/>
      </div>
      </div>
    </div>
    </div>
  )
}

export default EmailVerification