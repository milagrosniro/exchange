import React, { useContext, useEffect, useState } from 'react'
import Card from '../Card/Card'
import './containerCards.scss'
import TokenPreSales from '../TokenPreSales/TokenPreSales';
import Button from '../Button/Button'
import { ThemeContext } from '../../context/ThemeContext'
import Home from '../../pages/Home/Home'
import Dashboard from '../../pages/Dashboard/Dashboard'
import qr from '../../images/QRWHITE1.png'
import { useLocation } from 'react-router-dom';
import Countdown from '../Countdown/Coundown';
import BalanceCard from '../BalanceCard/BalanceCard';
import PreSaleToken from '../PreSaleToken/PreSaleToken';


const ContainerCards = () => {

    const {theme, handleTheme} = useContext(ThemeContext)

    const location = useLocation()
    const [path, setPath] = useState(location.pathname)
    console.log(path, 'PATH')

  useEffect(() => {
    setPath(location.pathname)
  }, [location])

  return (
    <div className={`containerCards ${theme}`}>
        <div className='leftContainerCards'>
            {
                path === '/dashboard' ? <Dashboard/> : <Home/>
            }

        {/* <Dashboard/> */}
        </div>

        <div className="rightContainerCards">
        <Card width={''} height={''}>
            {/* <Countdown/> */}
            <BalanceCard/>
        </Card>
        <Button color='#FF1282' title='BUY TICKTES' img={qr} onClick={handleTheme} width={'70%'} height={'15%'} text={'white'}/>
        <Card width={''} height={''}>
            {/* <TokenPreSales/> */}
            <PreSaleToken/>
        </Card>
        </div>
    </div>
  )
}

export default ContainerCards