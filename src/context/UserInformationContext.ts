import { createContext } from "react";


interface UserInformation
{
    username: string;
    followers: number;
    following: number;
    stars: number;
    profile_picture: string;
    profile_url: string
};

const defaultState = 
{
    username: '',
    followers: 0,
    following: 0,
    stars: 0,
    profile_picture: '',
    profile_url: ''
}

export const UserInformationContext = createContext <UserInformation> (defaultState); 