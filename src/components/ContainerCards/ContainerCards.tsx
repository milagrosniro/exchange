import { useContext, useEffect, useState } from "react";
import Card from "../Cards/Card/Card";
import "./containerCards.scss";
import TokenPreSales from "../Cards/TokenPreSales/TokenPreSales";
import Button from "../Buttons/Button/Button";
import { ThemeContext } from "../../context/ThemeContext";
import Home from "../../pages/Home/Home";
import Dashboard from "../../pages/Dashboard/Dashboard";
import qr from "../../images/QRWHITE1.png";
import { useLocation } from "react-router-dom";
import Countdown from "../Countdown/Coundown";


const ContainerCards = () => {
  const { theme} = useContext(ThemeContext);

  const location = useLocation();
  const [path, setPath] = useState(location.pathname);

  useEffect(() => {
    setPath(location.pathname);
  }, [location]);

  return (
    <div className={`containerCards ${theme}`}>
      {path === "/dashboard" ? (
        <>
        <Dashboard/>
        </>
      ) : (
        <>
          <div className="leftContainerCards">
            <Home />
          </div>

          <div className="rightContainerCards">
            <Card width={""} height={"40%"}>

              <Countdown />
            </Card>
            <Button
              color={theme === "light" ? "#FF1282" : "#00FFF7"}
              title="BUY TICKTES"
              img={qr}
              onClick={()=>{}}
              width={"70%"}
              height={"15%"}
              text={theme === "light" ? "#FFFFFF" : "#000000"}
            />
            <TokenPreSales />
          </div>
          <div className="pathPage">{"DASHBOARD"}</div>
        </>
      )}
    </div>
  );
};

export default ContainerCards;
