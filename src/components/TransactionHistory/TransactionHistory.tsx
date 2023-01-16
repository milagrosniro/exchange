import React, { useState } from 'react'
import './transactionHistory.scss'
import { AiOutlineEye } from 'react-icons/ai'
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const TransactionHistory = () => {
  const {theme} = useContext(ThemeContext)
    const [headers, setHeaders] = useState<string[]>(['Transaction #ID','Tokens','Amount paid','Wallet','Status'])
    const [body,setBody]= useState<any[][]>([[
        'TNX0001 2022-10-21 10:45PM','288.000 TXT', '350.000 USDT', '1FtDj64Dgtuy345jhfgA', 'Pending'
    ],
    ['TNX0001 2022-10-21 10:45PM', '100.000 TXT', '350.000 USDT', '1FtDj64Dgtuy345jhfgA','']

])
  return (
    <div className={`containerHistory ${theme}`}>
        <div className="firstRow">
                <p>Tokens balance</p>
                <div className='hideIcon'>Hide <AiOutlineEye/> </div>

    </div>

    <div className="tableContainer">
    <table>
  <tr>
    {headers && headers.map(h => <td>{h}</td>)}
  </tr>
  {body && body.map(b => <tr>{b.map(el => <td className='tdBody'>{el}</td>)}</tr>)}

</table>
    </div>
    <div className="lastRow">Show All</div>
    </div>
  )
}

export default TransactionHistory