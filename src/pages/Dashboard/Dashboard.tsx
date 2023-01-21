
import { useContext } from 'react'
import AdvanceSecurity from '../../components/AdvanceSecurity/AdvanceSecurity'
import BalanceCard from '../../components/BalanceCard/BalanceCard'
import Button from '../../components/Button/Button'
import Card from '../../components/Card/Card'
import DeviceAndActivities from '../../components/DeviceAndActivities/DeviceAndActivities'
import EmailVerification from '../../components/EmailVerification/EmailVerification'
import PreSaleToken from '../../components/PreSaleToken/PreSaleToken'
import TwoFAutentication from '../../components/TwoFAutentication/TwoFAutentication'
import { ThemeContext } from '../../context/ThemeContext'
import qr from "../../images/QRWHITE1.png";

import './dashboard.scss'

const Dashboard = () => {
  const { theme, handleTheme } = useContext(ThemeContext);

  return (
    <div className='containerDashboard'>
    <div className="leftContainerCards">

    <Card width={'60'} height={''}>
      <TwoFAutentication/>

      <hr/>

   <EmailVerification/>
<hr/>
<AdvanceSecurity/>
<hr/>
<DeviceAndActivities/>

    </Card>
    </div>
    <div className="rightContainerCards">
            <Card width={""} height={""}>
              <BalanceCard />
            </Card>
            <Button
              color={theme === "light" ? "#FF1282" : "#00FFF7"}
              title="BUY TICKTES"
              img={qr}
              onClick={handleTheme}
              width={"70%"}
              height={"15%"}
              text={theme === "light" ? "#FFFFFF" : "#000000"}
            />
            <Card width={""} height={""}>
              <PreSaleToken />
            </Card>
          </div>
    </div>
  )
}

export default Dashboard