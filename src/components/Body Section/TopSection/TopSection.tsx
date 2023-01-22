import './topSection.scss'
import './topSection.css'
import logoLight from '../../../images/logoRosa.png'
import logoDark from '../../../images/logoDark.png'
import {HiOutlineUserCircle} from 'react-icons/hi'
import { useContext, useState } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'
import ModalSign from '../../ModalSign/ModalSign'
import ToggleButton from '../../Buttons/ToggleButton/ToggleButton'
import Burguer from '../../Buttons/Burguer/Burguer'

const TopSection = () => {
  const {theme, handleTheme, setIsOpenProfile, isOpenProfile,isOpenMenu, setIsOpenMenu } = useContext(ThemeContext)

 const handleBurguerMenu = () => {
  setIsOpenMenu(!isOpenMenu)
 }


  return (
    <div className={`topSection-${theme}`}>
      <div className="headerSection flex">
        <div className="logo" onClick={handleTheme} >
        <img src={theme === 'light' ? logoLight : logoDark} alt='logo' width={60}/>
        </div>
        <div className="info" >
          <div className='contactInfo' onClick={()=>setIsOpenProfile(!isOpenProfile)}>

            <HiOutlineUserCircle className='icon'/>
              <span>example@gmail.com</span>
          </div>
    <div className="toggleContainer">

              <ToggleButton/>
    </div>

              <div className='containerBurguer'>
              <Burguer onClick={handleBurguerMenu} />
              </div>
        </div>


      </div>
    </div>
  )
}

export default TopSection