import { useContext, useState } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import './preSaleToken.scss'

const PreSaleToken = () => {

    const {theme} = useContext(ThemeContext)

  return (
    <div className={`containerPreSaleToken ${theme}`}>

        <div className="body">
            <div className={'titlePreSale'}>PRE-SALE TOKEN SALES</div>
            <div className="tokenPrice">
                <div>TXT TOKEN PRICE</div>
                <div>BTC= <span>38970 TXT</span></div>
            </div>
            <div className={'titlePreSale'}>PRE-SALE TOKEN PROGRESS</div>
        </div>
    </div>
  )
}

export default PreSaleToken