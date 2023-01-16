import React from 'react'
import Card from '../../components/Card/Card'
import CardTokenSales from '../../components/CardTokenSales/CardTokenSales'
import TokensBalance from '../../components/TokensBalance/TokensBalance'
import TransactionHistory from '../../components/TransactionHistory/TransactionHistory'
import './home.scss'

const Home = () => {
  return (
    <div className='containerHome'>
        <Card width={''} height={'25%'}>
           <CardTokenSales/>
</Card>
        <Card width={''} height={'35%'}>
            <TokensBalance/>
        </Card>
        <Card width={''} height={'30%'}>
        <TransactionHistory/>
        </Card>
    </div>
  )
}

export default Home