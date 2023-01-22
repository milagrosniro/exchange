
import './modalSign.scss'
import Dashboard from '../../pages/Dashboard/Dashboard';
import Button from '../Buttons/Button/Button';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const ModalSign = () => {
    const {theme} = useContext(ThemeContext)
    console.log(theme, 'THEME')

    const handleCloseSession = () => {
        console.log('CERRAR SESION')
        // window.sessionStorage.removeItem("token");
        // dispatch({ type: "logOut" });
        // navigate("/login", { replace: true });
      };
  return (
    <div className={theme}>

    <div className={'modalProfileContainer'}>
    <div className={'modalProfile'}>
      <div className={'profileInfo'}>

        <div className={'profileData'}>
          <div>Dashboard</div>
          <div onClick={handleCloseSession}>Sign Out</div>
          <Button color={theme === 'light' ? '#FF1282' : '#00FFF7'} title={'BUY TOKENS'} width={''} height={''} text={theme === 'light' ? '#FFFFFF' : '#000000'}/>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default ModalSign