import { createContext } from "react";

interface ITheme
{
    name: string;
    setTheme: (state: string) => void
}

const defaultFunction = (state: string) => {};


export const ThemeContext = createContext <ITheme> ({name: 'dark', setTheme: defaultFunction});