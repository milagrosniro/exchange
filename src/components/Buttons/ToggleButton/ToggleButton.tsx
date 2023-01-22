import { useState, useContext, useEffect } from 'react';
import './toggleButton.scss'
import { ThemeContext } from '../../../context/ThemeContext';

const ToggleButton = () => {
    const [toggle, setToggle] = useState(false);
    const {handleTheme, theme} = useContext(ThemeContext)

    useEffect(()=>{
        theme === 'dark' ? setToggle(true) : setToggle(false)
    },[])

    const handleOnClick= ()=>{
        setToggle(!toggle)
        handleTheme()

    }

    return(
        <div className={`wrg-toggle ${toggle ? 'wrg-toggle--checked' : ''}`} onClick={handleOnClick}>
            <div className="wrg-toggle-container">
                <div className="wrg-toggle-check">
                </div>
                <div className="wrg-toggle-uncheck">
                </div>
            </div>
            <div className="wrg-toggle-circle"></div>
            <input className="wrg-toggle-input" type="checkbox" aria-label="Toggle Button" />
        </div>
    )
}

export default ToggleButton;