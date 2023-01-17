
import AdvanceSecurity from '../AdvanceSecurity/AdvanceSecurity'
import Button from '../Button/Button'
import Card from '../Card/Card'
import DeviceAndActivities from '../DeviceAndActivities/DeviceAndActivities'
import EmailVerification from '../EmailVerification/EmailVerification'
import TwoFAutentication from '../TwoFAutentication/TwoFAutentication'
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