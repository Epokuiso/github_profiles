import { createContext } from "react";

interface IFoundUser
{
    foundUser: boolean;
    setFoundUser: (isFound: boolean) => void
}

const defaultPropFunction = (isFound: boolean) => {}

export const FoundUserContext = createContext <IFoundUser> ({foundUser: true, setFoundUser: defaultPropFunction});