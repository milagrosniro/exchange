import React from 'react'
import Button from '../Button/Button'
import './twoFAutentication.scss'

const TwoFAutentication = () => {
  return (
    <div className='containerSubCard_twoFAutentication'>

      <div className='containerRightSubCard'>

      <h3>Two-Factor Autentication (2FA)</h3>
      <h4>Google Autenticator (Recommended)</h4>
      <div>Protect your account and transactions</div>
      <p>Having Trouble?</p>


      </div>
      <div className='containerBtns'>

        <div className='wrapBtns'>
          <Button color={'#C4C4C4'} title={'Change'} width={'40%'} height={'40%'} text={'white'}/>
          <Button color={'#FF1282'} title={'Remove'} width={'40%'} height={'40%'} text={'white'}/>
        </div>
        </div>
      </div>
  )
}

export default TwoFAutentication