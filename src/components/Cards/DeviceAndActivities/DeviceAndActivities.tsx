import React, { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'
import Button from '../../Buttons/Button/Button'
import './deviceAndActivities.scss'

const DeviceAndActivities = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <div className={theme}>

    <div className='container_DeviceAndActivities'>

    <div className='containerSubCard_DeviceAndActivities'>

    <div className='containerRightSubCard'>

    <h2>Devices and Activities</h2>
    <h3>Device Management</h3>

    <p>Manage devices allowed to access your account </p>


    </div>
    <div className='containerBtns'>
      <div className='wrapBtns'>
        <Button color={'#C4C4C4' } title={'Manage'} width={'60%'} height={'50%'} text={theme === 'light' ?`white` : '#3F3D4D'}/>
      </div>
      </div>
    </div>
    <div className='containerSubCard_DeviceAndActivities second'>

    <div className='containerRightSubCard'>


    <h3>Account Activity</h3>
    <p>Last login: 2022-07-12 13:28:11</p>

    <p>Suspicious account activity?  <span>Disable account</span></p>


    </div>
    <div className='containerBtns'>
      <div className='wrapBtns'>
        <Button color={'#C4C4C4'} title={'More'} width={'60%'} height={'50%'} text={theme === 'light' ?`white` : '#3F3D4D'}/>
      </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default DeviceAndActivities