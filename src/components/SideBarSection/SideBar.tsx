import './sidebar.scss'
import {RxDashboard} from 'react-icons/rx'
import {IoSettingsOutline, IoWalletOutline} from 'react-icons/io5'
import {VscGraph} from 'react-icons/vsc'
import {GrNotes} from 'react-icons/gr'
import { NavLink } from "react-router-dom";
import {BiMessageCheck, BiSupport} from 'react-icons/bi'
import {CiLogout} from 'react-icons/ci'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { ISideBar } from '../../interfaces/menuInterfaces'
import { HiOutlineDocumentText } from 'react-icons/hi'


const listSideBar : ISideBar[] = [
  {
    title: 'Overview',
    items: [
        {
          icon: <RxDashboard className='icon'/>,
          title: 'Dashboard',
          href: '/dashboard'
        },
        {
          icon: <IoWalletOutline className='icon'/>,
          title: 'Your Verified Wallets',
          href: '/'
        },
        {
          icon: <VscGraph className='icon'/>,
          title: 'Transaction History',
          href: '/'
        },
        {
          icon: <HiOutlineDocumentText className='icon'/>,
          title: 'Get Verified',
          href: '/'
        },
        {
          icon: <HiOutlineDocumentText className='icon'/>,
          title: 'Buy Tokens',
          href: '/'
        },

    ]
  },
  {
    title: 'Account',
    items: [
        {
          icon: <IoSettingsOutline className='icon'/>,
          title: 'Settings',
          href: '/'
        },
    ]
  }
]

const listSideBarFooter : ISideBar[] = [
  {
    title: '',
    items: [
        {
          icon: <BiSupport className='icon'/>,
          title: 'Support',
          href: '/'
        },
        {
          icon: <BiMessageCheck className='icon'/>,
          title: 'Messages',
          href: '/'
        },
        {
          icon: <CiLogout className='icon'/>,
          title: 'Logout',
          href: '/'
        },

    ]
  },

]

const SideBar = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <div className={`sideBar-${theme} grid`}>
<div>

        {
          listSideBar.map((el,index)=><div className="menuDiv" key={index}>
            <div key={index} className="divTitle">
            <h3 key={index}>{el.title}</h3>
            </div>
            {el.items.map((item,i)=><ul className='menuLists grid' key={i++}>
            <li className='listItems' key={i}>

                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "menuLink nav-active" : "menuLink"
                    }
                    to={item.href}
                    key={i}
                  >
                    {item.icon} <span className='smallText' key={i}>{item.title}</span>
                  </NavLink>

            </li>
            </ul>)}
             </div>)
        }
</div>


{
          listSideBarFooter.map(el=><div className="menuDiv">
            <div className="divTitle">

            <h3>{el.title}</h3>
            </div>
            {el.items.map((item,i)=><ul className='menuLists grid'>
            <li className='listItems' key={i}>

                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "menuLink nav-active" : "menuLink"
                    }
                    to={item.href}
                  >
                    {item.icon}
                     <span className='smallText'>{item.title} </span>
                     {item.title === 'Messages' && <div className='divMsg'>12</div>}
                  </NavLink>

            </li>
            </ul>)}
             </div>)
        }

      </div>
  )
}

export default SideBar