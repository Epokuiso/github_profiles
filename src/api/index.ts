import { defaultState, UserInformation } from "../context/UserInformationContext";


const URL = "https://api.github.com/";
const USERS = "users/";

let userInformation: UserInformation = defaultState;

export const getUserProfileInformation = async (username: string) => 
{
    await fetch (URL + USERS + username)
    .then (response => response.json ())
    .then (data => userInformation = getFormatedUserData (data))
    return userInformation;
}

const getFormatedUserData = (data: any) =>
{
    return ( 
    {
        username: data?.login,
        followers: data?.followers,
        following: data?.following,
        stars: 0,
        profile_picture: data?.avatar_url,
        profile_url: data?.html_url
    })
}