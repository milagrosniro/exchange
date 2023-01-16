import React, { useContext } from 'react'
import Card from '../Card/Card'
import CardTokenSales from '../CardTokenSales/CardTokenSales'
import TokensBalance from '../TokensBalance/TokensBalance'
import TransactionHistory from '../TransactionHistory/TransactionHistory'
import './containerCards.scss'
import TokenPreSales from '../TokenPreSales/TokenPreSales';
import Button from '../Button/Button'
import { ThemeContext } from '../../context/ThemeContext'
import Home from '../../pages/Home/Home'
import Dashboard from '../Dashboard/Dashboard'


const ContainerCards = () => {

    const {theme, handleTheme} = useContext(ThemeContext)
  return (
    <div className={`containerCards ${theme}`}>
        <div className='leftContainerCards'>
        <Home/>
        {/* <Dashboard/> */}
        </div>

        <div className="rightContainerCards">
        <Card width={''} height={''}>
            <div>
                <div className='titleContainer'>
                <p>Stage-1 </p><span> Countdown</span>
                </div>
            </div>
        </Card>
        <Button color='pink' title='BUY TICKTES' img='' onClick={handleTheme}/>
        <Card width={''} height={''}>
            <TokenPreSales/>
        </Card>
        </div>
    </div>
  )
}

export default ContainerCards