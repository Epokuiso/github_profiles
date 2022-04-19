import { createContext } from "react";

interface ITheme
{
    toggle: boolean;
    setTheme: (state: boolean) => void
}

const defaultFunction = (state: boolean) => {};

export const ThemeContext = createContext <ITheme> ({toggle: true, setTheme: defaultFunction});