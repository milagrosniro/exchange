import './topSection.scss'
import './topSection.css'
import logoLight from '../../../images/logoRosa.png'
import logoDark from '../../../images/logoDark.png'
import {HiOutlineUserCircle} from 'react-icons/hi'
import { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'

const TopSection = () => {
  const {theme, handleTheme} = useContext(ThemeContext)

  return (
    <div className={`topSection-${theme}`}>
      <div className="headerSection flex">
        <div className="logo" onClick={handleTheme} >
        <img src={theme === 'light' ? logoLight : logoDark} alt='logo' width={60}/>
        </div>
        <div className="info">

            <HiOutlineUserCircle className='icon'/>
              <span>example@gmail.com</span>

        </div>

      </div>
    </div>
  )
}

export default TopSection