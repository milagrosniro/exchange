import React from 'react'
import Card from '../../components/Cards/Card/Card'
import CardTokenSales from '../../components/Cards/CardTokenSales/CardTokenSales'
import TokensBalance from '../../components/Cards/TokensBalance/TokensBalance'
import TransactionHistory from '../../components/Cards/TransactionHistory/TransactionHistory'

import './home.scss'

const Home = () => {
  return (
    <div className='containerHome'>
        <Card width={''} height={'30%'}>
           <CardTokenSales/>
</Card>
        <Card width={''} height={'30%'}>
            <TokensBalance/>
        </Card>

        <TransactionHistory/>

    </div>
  )
}

export default Home