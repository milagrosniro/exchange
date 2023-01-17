import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import Button from '../Button/Button'
import './emailVerificaction.scss'

const EmailVerification = () => {
  const {theme} = useContext(ThemeContext)

  return (
    <div className={`containerSubCard_emailVerification ${theme}`}>

    <div className='containerRightSubCard'>

    <h2>Email address verification</h2>

    <p>Protect your account and transactions <span>tx****@gmail.com</span></p>


    </div>
    <div className='containerBtns'>
      <div className='wrapBtns'>
        <Button color={'#C4C4C4'} title={'Change'} width={'60%'} height={'50%'} text={`white`}/>
      </div>
      </div>
    </div>
  )
}

export default EmailVerification