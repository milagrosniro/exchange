import React from 'react'
import {AiOutlineEye} from 'react-icons/ai'
import {useState} from 'react';
import './tokensBalance.scss'
import DonutChart from '../Charts/DonutChart';

const TokensBalance = () => {
    const [valuesTokens, setValuesTokens] = useState<any[]>([
        {
            nickName:'BTC',
            value: '3.123',
            percentaje:'55%',
            name:'Bitcoin'
        },
        {
            nickName:'ETH',
            value: '1.235',
            percentaje:'15%',
            name:'Ethereum'
        },
        {
            nickName:'BNB',
            value: '7.133',
            percentaje:'10%',
            name:'BNB'
        },
        {
            nickName:'USDT',
            value: '80.123',
            percentaje:'15%',
            name:'USD Tether'
        },
    ])
  return (
    <div className='containerTokens'>
        <div className="firstRow">
            <div className="title">
                <p>Tokens balance</p>
                <div className='hideIcon'>Hide <AiOutlineEye/> </div>
            </div>

            <div className="subtitle">
                <div className='txtInfo'>250.000 <span>TXT</span></div>
                <div className='usdInfo'>250.000 <span>USD</span></div>

            </div>
        </div>

        <div className="secondRow">
            <div className="title">Distribution of your payments</div>
            <div className="wrapGraph">
                <div className="values">
                    {valuesTokens.map(value=>
                        <div className='rowValues'>
                            <div>{value.value}</div>
                            <span>{value.nickName}</span>
                        </div>)}
                </div>
                <div className="containerGraph">
                    GRAFICO
                    {/* <DonutChart colors={['red',
                      'blue',
                      'yellow',
                      'orange',
                      'black'
                  ]} series={[55,15,10,15]} labels={['']} width={50} type={'donut'}/> */}
                  </div>
                <div className="values">
                    {valuesTokens.map(value=>
                        <div className='percentajeValues'>
                            <div>{value.percentaje}</div>
                            <span>{value.name}</span>
                        </div>)}
                </div>
            </div>
        </div>
    </div>
  )
}

export default TokensBalance