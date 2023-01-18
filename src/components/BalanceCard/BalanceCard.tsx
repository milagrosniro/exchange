import React from 'react'
import { useState, useContext } from 'react';
import './balanceCard.scss'
import { ThemeContext } from '../../context/ThemeContext';

export interface ITokens{
txt: string,
$: string
}

export interface IPayments{
    btc:string,
    eth:string,
    bnb:string,
    usdt:string
}

interface IInfoBalance{
    tokens: ITokens[],
    payments: IPayments[]
}

const BalanceCard = () => {
    const {theme} = useContext(ThemeContext)
    const [infoBalance, setInfoBalance]= useState<any>(
        {
            tokens: [{

                txt:'250.000',
                $:'250.000',
            }],
            payments:[

                {
                    btc:'3.123',
                    eth:'1.235',
                    bnb:'7.133',
                    usdt:'80.123'
                }
            ]

        },
    )
  return (
    <div className={`containerTokens ${theme}`}>

        <div className="body">
            <div className={'titleBalance'}>Tokens balance</div>
            {infoBalance && infoBalance.tokens.map((info: any)=>

                 <div className='containerInfoBalance'>
                 <div className="infoBalance"><p>{info.txt}</p><span>TXT</span></div>
                 <div className="infoBalance"><p>{info.$}</p><span>$</span></div>
                 </div>
            )}
            {
                infoBalance && infoBalance.payments.map((pay:any) =>
                    <div className="payments">
                    <div className="titlePayments">Your payments</div>
                    <div className="containerPayments">
                        <div className="payment">
                            <div>{pay.btc}</div>
                            <p>BTC</p>
                        </div>
                        <div className="payment">
                            <div>{pay.eth}</div>
                            <p>ETH</p>
                        </div>
                        <div className="payment">
                            <div>{pay.bnb}</div>
                            <p>BNB</p>
                        </div>
                        <div className="payment">
                            <div>{pay.usdt}</div>
                            <p>USDT</p>
                        </div>
                    </div>
                 </div>
                 )
            }
        </div>
    </div>
  )
}

export default BalanceCard