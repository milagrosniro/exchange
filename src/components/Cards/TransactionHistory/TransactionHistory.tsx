import React, { useState } from 'react'
import './transactionHistory.scss'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import Card from '../../Cards/Card/Card';

const TransactionHistory = () => {
    const {theme} = useContext(ThemeContext)
    const [show, setShow] = useState(true)
    const [headers, setHeaders] = useState<string[]>(['Transaction #ID','Tokens','Amount paid','Wallet','Status'])
    const [body,setBody]= useState<any[][]>([[
        'TNX0001 2022-10-21 10:45PM','288.000 TXT', '350.000 USDT', '1FtDj64Dgtuy345jhfgA', 'Pending'
    ],
    ['TNX0001 2022-10-21 10:45PM', '100.000 TXT', '350.000 USDT', '1FtDj64Dgtuy345jhfgA',''],
    [
        'TNX0001 2022-10-21 10:45PM','288.000 TXT', '350.000 USDT', '1FtDj64Dgtuy345jhfgA', 'Pending'
    ],
    ['TNX0001 2022-10-21 10:45PM', '100.000 TXT', '350.000 USDT', '1FtDj64Dgtuy345jhfgA',''],
    [
        'TNX0001 2022-10-21 10:45PM','288.000 TXT', '350.000 USDT', '1FtDj64Dgtuy345jhfgA', 'Pending'
    ],
    ['TNX0001 2022-10-21 10:45PM', '100.000 TXT', '350.000 USDT', '1FtDj64Dgtuy345jhfgA','']

])
const [expanded, setExpanded] = useState(false);
  return (
    <Card width={''} height={!expanded ? '35%' : '45%'}>

    <div className={`containerHistory ${theme}`}>
        <div className="firstRow">
                <p>Tokens balance</p>
                <div className='hideIcon' onClick={()=> setShow(!show)}>
                  {show ? <div>Hide <AiOutlineEye/></div> : <div>Show <AiOutlineEyeInvisible/></div>}
                   </div>

    </div>

    <div className="tableContainer" style={
      expanded ?{overflow:'scroll'} : {overflow:'hidden'}}>
    <table>
  <tr>
    {headers && headers.map(h => <td>{h}</td>)}
  </tr>
  {body && body.map(b => <tr>{b.map((el, i) => {

if(i === headers.indexOf('Tokens')){
  return <td className='tdBody'>
    <input type={show ? 'text' : 'password'} disabled={true} value={el}></input>
  </td>
}else{

 return <td className='tdBody'>{el}</td>
}

  })
  }</tr>)}

</table>
    </div>
    <div className="lastRow" onClick={()=> setExpanded(!expanded)}><p>Show All</p></div>
    </div>
    </Card>
  )
}

export default TransactionHistory