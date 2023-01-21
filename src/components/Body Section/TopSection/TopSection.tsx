import './topSection.scss'
import './topSection.css'
import logoLight from '../../../images/logoRosa.png'
import logoDark from '../../../images/logoDark.png'
import {HiOutlineUserCircle} from 'react-icons/hi'
import { useContext, useState } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'
import ModalSign from '../../ModalSign/ModalSign'

const TopSection = () => {
  const {theme, handleTheme, setIsOpenProfile, isOpenProfile} = useContext(ThemeContext)
  // const [isOpenProfile, setIsOpenProfile] = useState(false);

  return (
    <div className={`topSection-${theme}`}>
      <div className="headerSection flex">
        <div className="logo" onClick={handleTheme} >
        <img src={theme === 'light' ? logoLight : logoDark} alt='logo' width={60}/>
        </div>
        <div className="info" onClick={()=>setIsOpenProfile(!isOpenProfile)}>

            <HiOutlineUserCircle className='icon'/>
              <span>example@gmail.com</span>

        </div>


      </div>
    </div>
  )
}

export default TopSection