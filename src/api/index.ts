import { defaultState, IUserInformation } from "../context/UserInformationContext";


const URL = "https://api.github.com/";
const USERS = "users/";
const REPOSITORIES = "/repos";

let userInformation: IUserInformation = defaultState;

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
        repos: data?.public_repos,
        profile_picture: data?.avatar_url,
        profile_url: data?.html_url
    })
}