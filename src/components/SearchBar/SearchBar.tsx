import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserProfileInformation, setUserRepositories, setUserStars, sortTopRepositories } from "../../api";
import { RepositoriesInformationContext } from "../../context/RepositoriesInformationContext";
import { IUserInformation, UserInformationContext } from "../../context/UserInformationContext";
import { Container, Spinner } from "./styles";

interface ISearchBarProps
{
    foundUser: boolean;
    setFoundUser: (isFound: boolean) => void
}


export const SearchBar = ({foundUser, setFoundUser}: ISearchBarProps) =>
{
    const [searching, setSearching] = useState (false);
    const userInformationContext = useContext (UserInformationContext);

    const repositoriesContext = useContext (RepositoriesInformationContext);
    let navigate = useNavigate ();
    
    const setUsername = (event: React.ChangeEvent<HTMLInputElement>) =>
    {
        if (!foundUser) setFoundUser (true);
        userInformationContext.username = event.target.value;
    }

    const wasEnterPressed = async (key: React.KeyboardEvent<HTMLInputElement>) =>
    {
        key.code === 'Enter' ? await searchUsername () : await null;
    }

    const assignDataToContext = (data: IUserInformation) =>
    {
        userInformationContext.username = data.username;
        userInformationContext.followers = data.followers;
        userInformationContext.following = data.following;
        userInformationContext.repos = data.repos;
        userInformationContext.profile_picture = data.profile_picture;
        userInformationContext.profile_url = data.profile_url;
    }

    const searchUsername = async () =>
    {
        setSearching (true);
        assignDataToContext (await getUserProfileInformation (userInformationContext.username));       
        await checkUserFound (userInformationContext);
    }

    const redirectToProfilePage = () => 
    {
        setFoundUser (true);
        setSearching (false);
        navigate ('profile');
    }

    const checkUserFound = async (userInformation: IUserInformation) =>
    {
        if (typeof userInformation.username === 'undefined')
        {
            setFoundUser (false);
            setSearching (false);
        }    
        else 
        {
            await setUserRepositories (repositoriesContext, userInformationContext.username);    
            sortTopRepositories (repositoriesContext);
            setUserStars (repositoriesContext, userInformation);
            redirectToProfilePage ();
        }
    }

    return (
        <Container>
            <div className={`search-input ${foundUser ? '' : 'not-found'}`}>
                <input
                    className={`search-input-text  ${foundUser ? '' : 'not-found'}`} 
                    type='text' 
                    name='username' 
                    placeholder='Enter a username' 
                    onChange={ event => setUsername (event) }
                    onKeyUp={ event => wasEnterPressed (event) }
                    required
                />
                <button onClick={ async () => await searchUsername () }>Search</button>
            </div>
            {
                !searching ? null : <Spinner />
            }
        </Container>
    );
}