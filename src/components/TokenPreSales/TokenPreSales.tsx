import React from 'react'
import { useState, useContext } from 'react';
import './tokenPreSales.scss'
import { ThemeContext } from '../../context/ThemeContext';
import Card from '../Card/Card';

const TokenPreSales = () => {
    const {theme} = useContext(ThemeContext)
    const [infoTokenPreSales, setInfoTokenPreSales]= useState<any[]>([
        {
            stage:'1',
            type:'1$/TXT',
            status:'Completed',
            amount:'1.000.000TXT sold'
        },
        {
            stage:'2',
            type:'2$/TXT',
            status:'In Progress',
            amount:'540.331TXT sold'
        },
        {
            stage:'3',
            type:'4$/TXT',
            status:'19-4-2023',
            amount:''
        },
        {
            stage:'4',
            type:'4$/TXT',
            status:'19-5-2023',
            amount:''
        },

    ])
  return (
    <div className='containerCardTokenPreSale'>

<Card width={''} height={''}>

    <div className={`containerTokens ${theme}`}>
        <div className='title'>Token Presale Status</div>
        <div className="bodyTokenPreSale">
            {infoTokenPreSales && infoTokenPreSales.map(info=><div className={info.amount !== '' ? 'row' : 'noAmount'}>
                <div className={info.amount !== '' ? 'stage' : ''}>{`Stage-${info.stage}:`} <span>{info.type}</span></div>
                <div className="status">{info.status}</div>
                <div className="amount">{info.amount}</div>
            </div>)}
        </div>
    </div>
</Card>
    </div>
  )
}

export default TokenPreSales