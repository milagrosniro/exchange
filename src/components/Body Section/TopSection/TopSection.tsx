import './topSection.scss'
import './topSection.css'
import logo from '../../../images/logoRosa.png'
import {HiOutlineUserCircle} from 'react-icons/hi'
import { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'

const TopSection = () => {
  const {theme} = useContext(ThemeContext)

  return (
    <div className={`topSection-${theme}`}>
      <div className="headerSection flex">
        <div className="logo" onClick={()=> console.log('HOLA')}>
        <img src={logo} alt='logo' width={20}/>
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