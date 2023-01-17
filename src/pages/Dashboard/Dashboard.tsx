
import AdvanceSecurity from '../../components/AdvanceSecurity/AdvanceSecurity'
import Button from '../../components/Button/Button'
import Card from '../../components/Card/Card'
import DeviceAndActivities from '../../components/DeviceAndActivities/DeviceAndActivities'
import EmailVerification from '../../components/EmailVerification/EmailVerification'
import TwoFAutentication from '../../components/TwoFAutentication/TwoFAutentication'
import './dashboard.scss'

const Dashboard = () => {

  return (
    <>
    <Card width={'60'} height={''}>
      <TwoFAutentication/>

      <hr/>

   <EmailVerification/>
<hr/>
<AdvanceSecurity/>
<hr/>
<DeviceAndActivities/>

    </Card>
    </>
  )
}

export default Dashboard