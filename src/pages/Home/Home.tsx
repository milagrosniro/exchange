import React from 'react'
import Card from '../../components/Card/Card'
import CardTokenSales from '../../components/CardTokenSales/CardTokenSales'
import TokensBalance from '../../components/TokensBalance/TokensBalance'
import TransactionHistory from '../../components/TransactionHistory/TransactionHistory'
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