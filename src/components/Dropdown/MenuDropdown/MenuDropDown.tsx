import React, { useState } from 'react'

interface IMenuProps{
    array: any[]
}

interface IDisplay {
    state: string;
    id: any;
  }

const MenuDropDown = ({array}:IMenuProps) => {
    const [display, setDisplay] = useState<IDisplay>({
        state: "none",
        id: undefined,
      });

      const handleClick = (index: number, state?: string) => {
        !state ? display.state == "none"
          ? setDisplay({ ...display, state: "inline", id: index })
          : setDisplay({ ...display, state: "none", id: index })
          : setDisplay({ ...display, state, id: index })
          console.log(index, 'INDEX')
      };
  return (
<div className="containerDropdown">
    {
        array.map((list, index)=>{
            return(
                <div className={"dropdownTitle"} key={index}>
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
            )
        })
    }
    </div>
     )
}

export default MenuDropDown