import { createContext } from "react";

interface ITheme
{
    name: string;
    setTheme: () => void
}

const defaultFunction = () => {};


export const ThemeContext = createContext <ITheme> ({name: 'dark', setTheme: defaultFunction});