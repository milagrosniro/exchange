import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../Button/Button'
// import { ThemeContext } from '../../App'
import Card from '../Card/Card'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import ProgressBar from '../ProgressBar/ProgressBar'
// import SideBar from '../SideBar/SideBar'
import './dashboard.scss'

const Dashboard = () => {

  return (
    <>
    <Card width={'60'} height={''}>
      <div className='containerSubCard'>

      <div>

      <h2>Two-Factor Autentication (2FA)</h2>
      <h3>Google Autenticator (Recommended)</h3>
      <p>Protect your account and transactions</p>
      <div>Having Trouble?</div>

      </div>
      <div className='containerBtn'>
        {/* <Button/>
        <Button/> */}
      </div>

      </div>
      <hr/>

    </Card>
    </>
    // <div className='container'>
    //     <NavBar/>
    //     <div className='wrap-body'>
    //     {/* <SideBar/> */}
    //     <div className='container-cards'>
    //     <div className='left'>

    //     <Card width={'60%'} height={'20%'}>
    //       <div>
    //         <h4>PRE-SALE TOKEN SALES</h4>
    //         <div>
    //           <div>
    //             <p>TXT TOKEN PRICE</p>
    //             <p><span>1 TXT</span> = 0,00005208 BTC</p>

    //           </div>
    //           <div>
    //             <div>

    //             <p>Minimum Ticket</p>
    //             <p><span>5.000 TXT</span>= 0,002604 BTC</p>
    //             </div>

    //             <div>

    //             <p>Maximun Ticket</p>
    //             <p><span>150.000 TXT</span>= 7,812 BTC</p>
    //             </div>

    //           </div>
    //           <div>
    //             <p>PRE-SALE TOKEN PROGRESS</p>
    //             {/* <ProgressBar value={'67'}/> */}
    //           </div>
    //         </div>
    //       </div>
    //       </Card>
    //     <Card width={'50%'} height={'20%'}>
    //     <div>
    //         <h4>PRE-SALE TOKEN SALES</h4>
    //         <div>
    //           <div>
    //             <p>TXT TOKEN PRICE</p>
    //             <p><span>1 TXT</span> = 0,00005208 BTC</p>

    //           </div>
    //           <div>
    //             <div>

    //             <p>Minimum Ticket</p>
    //             <p><span>5.000 TXT</span>= 0,002604 BTC</p>
    //             </div>

    //             <div>

    //             <p>Maximun Ticket</p>
    //             <p><span>150.000 TXT</span>= 7,812 BTC</p>
    //             </div>

    //           </div>
    //           <div>
    //             <p>PRE-SALE TOKEN PROGRESS</p>
    //             {/* <ProgressBar value={'67'}/> */}
    //           </div>
    //         </div>
    //       </div>
    //     </Card>
    //     <Card width={'50%'} height={'20%'}>
    //     <div>
    //         <h4>PRE-SALE TOKEN SALES</h4>
    //         <div>
    //           <div>
    //             <p>TXT TOKEN PRICE</p>
    //             <p><span>1 TXT</span> = 0,00005208 BTC</p>

    //           </div>
    //           <div>
    //             <div>

    //             <p>Minimum Ticket</p>
    //             <p><span>5.000 TXT</span>= 0,002604 BTC</p>
    //             </div>

    //             <div>

    //             <p>Maximun Ticket</p>
    //             <p><span>150.000 TXT</span>= 7,812 BTC</p>
    //             </div>

    //           </div>
    //           <div>
    //             <p>PRE-SALE TOKEN PROGRESS</p>
    //             {/* <ProgressBar value={'67'}/> */}
    //           </div>
    //         </div>
    //       </div>
    //     </Card>
    //     </div>
    //     <div className="right">

    //     <Card width={'40%'} height={'30%'}/>
    //     <Card width={'50%'} height={'30%'}/>
    //     </div>
    //     </div>


    //     </div>

    //     <Footer/>
    // </div>
  )
}

export default Dashboard