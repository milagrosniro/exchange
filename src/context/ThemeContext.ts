import { createContext } from "react";

interface IPropsContext{
    theme: 'light' | 'dark',
    setTheme: (value: 'light' | 'dark') => void,
    handleTheme: () => void,
    isOpenProfile: boolean,
    setIsOpenProfile: (value:boolean)=> void
}
export const ThemeContext = createContext({} as IPropsContext);
