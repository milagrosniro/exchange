import React, { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'
import Button from '../../Buttons/Button/Button'
import './twoFAutentication.scss'

const TwoFAutentication = () => {
    const {theme} = useContext(ThemeContext)
  return (
    <div className={`${theme} twoFAutWrap`}>

    <div className='containerSubCard_twoFAutentication'>

      <div className='containerRightSubCard'>

      <h3>Two-Factor Autentication (2FA)</h3>
      <h4>Google Autenticator (Recommended)</h4>
      <div className='text'>Protect your account and transactions</div>
      <p className='link'>Having Trouble?</p>


      </div>
      <div className='containerBtns'>

        <div className='wrapBtns'>
          <Button color={'#C4C4C4'} title={'Change'} width={'40%'} height={'30%'} text={theme === 'light' ? 'white' : '#3F3D4D'}/>
          <Button color={theme === 'light' ? '#FF1282' : '#00FFF7'} title={'Remove'} width={'40%'} height={'30%'} text={theme === 'light' ? 'white' : '#3F3D4D'}/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default TwoFAutentication