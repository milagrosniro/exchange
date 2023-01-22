import {
  useContext,
  useState,
} from "react";
import "./dropdown.scss";
import icon from '../../images/roseIcon.png'
import MenuDropDown from "./MenuDropdown/MenuDropDown";
import ToggleButton from "../Buttons/ToggleButton/ToggleButton";
import Button from "../Buttons/Button/Button";
import { ThemeContext } from "../../context/ThemeContext";

interface IDisplay {
  state: string;
  id: any;
}

interface ISelected{
  state: boolean,
  id: any
}

function Dropdown() {
  const {theme} = useContext(ThemeContext)
  const [selected, setSelected] = useState<ISelected>({state:false, id:undefined})
  console.log(selected, 'SELECTED')
  const [display, setDisplay] = useState<IDisplay>({
    state: "none",
    id: undefined,
  });

  const [subMenuDisplay, setSubMenuDisplay] = useState<IDisplay>({
    state: "none",
    id: undefined,
  });
  console.log(subMenuDisplay)

  const handleClick = (index: number, state?: string) => {
    setSelected({...selected, state: true, id: index})
    !state ? display.state == "none"
      ? setDisplay({ ...display, state: "inline", id: index })
      : setDisplay({ ...display, state: "none", id: index })
      : setDisplay({ ...display, state, id: index })
  };

  const handleOnClick = (index: number, state?: string) => {
    !state ? subMenuDisplay.state == "none"
      ? setSubMenuDisplay({ ...display, state: "inline", id: index })
      : setSubMenuDisplay({ ...display, state: "none", id: index })
      : setSubMenuDisplay({ ...display, state, id: index })

  };

  const listSideBar: any[] = [
    {
      title: "Dashboard",
      items: [],
    },
    {
      title: "Your Verified Wallets",
      items: [
        {
          title: "Your Verified Wallets",
          items:[],
        },
        {
          title: "Transaction History",
          items:[],
        },
      ],
    },
    {
      title: "Transaction History",
      items: [
        {
          title: "Your Verified Wallets",
          items: [],
        },
        {
          title: "Transaction History",
          items: [],
        },
      ],
    },
    {
      title: "Settings",
      items: [
        {
          title: "Account",
          items: [
            {
              title: "Preferences",
              href: "/preferences",
            },
          ],
        },
        {
          title: "Get Verified",
          items: [
            {
              title: "Documents",
              href: "/Documents",
            },
          ],
        },
        {
          title: "Security",
          items: [
            {
              title: "Security Activity",
              href: "/SecurityActivity",
            },
            {
              title: "Devices",
              href: "/Devices",
            },
          ],
        },
      ],
    },
  ];

  return (
    <>


    <div className={`containerDropdown ${theme}`}>
      {listSideBar.map((list, index) => {
        return (
          <div key={index} className="wrapDropdown">
            <div className={selected.state && selected.id === index ? `dropdownTitle selected` :`dropdownTitle` }>

              <div>{list.title}</div>
              <span
                onClick={() => handleClick(index)}
                style={{
                  transform:
                    display.state === "inline" && display.id === index
                      ? "rotate(90deg)"
                      : "rotate(0deg)",
                }}
                className="titleIconDrop"
              ></span>
            </div>

            <div
            className="wrapDropdown2"
              style={
                display.state === "inline" && display.id === index
                  ? { display: display.state }
                  : { display: "none" }
              }
            >
              {list.items.map(
                ((item: any, ind:number) => {
                 return  <div key={ind}>
                  <div className={"dropdownTitle"}>
              <div>{item.title}</div>

              <span
                onClick={() => handleOnClick(ind+item.title)}
                style={{
                  transform:
                  subMenuDisplay.state === "inline" && subMenuDisplay.id === ind+item.title
                      ? "rotate(90deg)"
                      : "rotate(0deg)",
                }}
                className="titleIconDrop"
              ></span>
            </div>
            <div
            className="wrapDropdown3"
              style={
                subMenuDisplay.state === "inline" && subMenuDisplay.id === ind+item.title
                  ? { display: subMenuDisplay.state }
                  : { display: "none" }
              }
            >
            {
              item.items.map((el:any, inde:number)=>{
              return <div className="containerElement">
               {el.title}
               <div className="iconElement"></div>
             </div> })
            }

            </div>
                  </div>
      })
              )}
            </div>

          </div>
        );
      })}

      <Button color={theme === 'light' ? '#FF1282' : '#00FFF7'} title={"Logout"} width={""} height={""} text={theme === 'light' ? '#FFFFFF' : '#000000'} />
    </div>
    </>
  );
}

export { Dropdown };
