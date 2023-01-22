import { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'
import ProgressBar from '../../ProgressBar/ProgressBar'
import './cardTokenSales.scss'

const CardTokenSales = () => {
    const {theme} = useContext(ThemeContext)
  return (
    <div className={`cardTokenSales ${theme}`}>
    <div className='title'>PRE-SALE TOKEN SALES</div>
    <div className='wrapContainer'>
        <div className='bodyInfo'>
            <div className="first">
                <p>TXT TOKEN PRICE</p>
                <div>
                    <span>1 TXT </span>
                    <p>= 0,00005208 BTC</p>
                </div>
            </div>
            <div className="second">
                <div className='containerRow'>

                <p>Minimun Ticket</p>
                <div>
                    <span>5.000 TXT </span>
                    <p> = 0,002604 BTC</p>
                </div>
                </div>

                <div className='containerRow'>

                <p>Minimun Ticket</p>
                <div>
                    <span>150.000 TXT </span>
                    <p> = 7,812 BTC</p>
                </div>
                </div>
            </div>

        </div>
        <div className="footerInfo">
            <p>PRE-SALE TOKEN PROGRESS</p>
            <ProgressBar value={'670.000'} percentaje={'67'}/>

        </div>
    </div>
</div>
  )
}

export default CardTokenSales