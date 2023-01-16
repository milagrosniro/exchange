import { createContext } from "react";

interface IPropsContext{
    theme: 'light' | 'dark',
    setTheme: (value: 'light' | 'dark') => void,
    handleTheme: () => void
}
export const ThemeContext = createContext({} as IPropsContext);
