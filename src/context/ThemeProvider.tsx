import React from 'react'

import {useState} from 'react';
import { ThemeContext } from './ThemeContext';

interface IProps{
    children: JSX.Element | JSX.Element[]
}

const ThemeProvider = ({children}: IProps) => {
const [theme, setTheme] = useState<'light' | 'dark'>('light')
const handleTheme= () =>{
    theme === 'light' ? setTheme('dark') : setTheme('light')
}

const [isOpenProfile, setIsOpenProfile] = useState(false);

  return (
    <ThemeContext.Provider value={{
        theme,
        setTheme,
        handleTheme,
        isOpenProfile,
        setIsOpenProfile

    }}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider