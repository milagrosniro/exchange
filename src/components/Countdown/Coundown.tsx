import { useState } from 'react';
import './countdown.scss';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const Countdown = () => {
  const [counts, setCounts] = useState({
    days: '84',
    hours: '07',
    minutes: '32',
    seconds: '41'
  })
    const {theme} = useContext(ThemeContext)

  return (
    <div className={`${theme} wrapCountdown`}>
    <div className='titleContainer'>
    <p>Stage-1 </p><span> Countdown</span>
    </div>
    <div className="countDownDiv">
      {
        Object.values(counts).map((e,i)=>
        <div className='wrapInfoCount' >

        <div className='valuesCountDown'>
          {e.split('').map(info=><div className='onlyValueCount'>{info}</div>)}

        </div>
        <div className='propertyCount'>{Object.keys(counts)[i]}</div>
        </div>
        )
      }
    </div>
</div>
  )
}

export default Countdown