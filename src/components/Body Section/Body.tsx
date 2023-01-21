import ContainerCards from '../ContainerCards/ContainerCards'
import ModalSign from '../ModalSign/ModalSign'
import SideBar from '../SideBarSection/SideBar'

import './body.scss'
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const Body = () => {
  const {isOpenProfile} = useContext(ThemeContext)

  return (
    <div className='mainContent'>

<SideBar/>
<ContainerCards/>
{

    isOpenProfile && <ModalSign/>

}

      </div>

  )
}

export default Body