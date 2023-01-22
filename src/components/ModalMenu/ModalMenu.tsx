
import './modalMenu.scss'
import Dashboard from '../../pages/Dashboard/Dashboard';
import Button from '../Buttons/Button/Button';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Dropdown } from '../Dropdown/Dropdown';
import { ISideBar } from '../../interfaces/menuInterfaces';
import ToggleButton from '../Buttons/ToggleButton/ToggleButton';
import icon from '../../images/roseIcon.png'


const ModalMenu = () => {
    const {theme} = useContext(ThemeContext)
    const listSideBar : any[] = [
      {
        title: 'Overview',
        items: [
            {

              title: 'Dashboard',
              href: '/dashboard'
            },
            {

              title: 'Your Verified Wallets',
              href: '/'
            },
            {

              title: 'Transaction History',
              href: '/'
            },

        ]
      },
      {
        title: 'Settings',
        items: [
            {

              title: 'Account',
              items: [{
                title: 'Preferences',
                href: '/preferences'
              }]
            },
            {

              title: 'Get Verified',
              items: [{
                title: 'Documents',
                href: '/Documents'
              }]
            },
            {

              title: 'Security',
              items: [{
                title: 'Security Activity',
                href: '/SecurityActivity'
              },
              {
                title: 'Devices',
                href: '/Devices'
              }
            ]
            },
        ]
      }
    ]


  return (
    <div className={theme}>

    <div className={'modalmenuContainer'}>
    <div className={'modalmenu'}>
      <div className={'menuInfo'}>

        <div className={'menuData'}>
        <div className="containerHeaderMenu">
      <img src={icon}/>
      <ToggleButton/>
      </div>
        <Dropdown/>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default ModalMenu