import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserProfileInformation } from "../../api";
import { IUserInformation, UserInformationContext } from "../../context/UserInformationContext";
import { Container, Spinner } from "./styles";

interface IFoundUser
{
    foundUser: boolean;
    setFoundUser: (isFound: boolean) => void
}


export const SearchBar = ({foundUser, setFoundUser}: IFoundUser) =>
{
    const [searching, setSearching] = useState (false);
    let userInformationContext = useContext (UserInformationContext);
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

    const searchUsername = async () =>
    {
        setSearching (true);
        checkUserFound (userInformationContext = await getUserProfileInformation (userInformationContext.username));
        setSearching (false);
    }

    const redirectToProfilePage = () => 
    {
        setFoundUser (true);
        navigate ('profile');
    }

    const checkUserFound = (userInformation: IUserInformation) =>
    {
        typeof userInformation.username === 'undefined' ? setFoundUser (false) : redirectToProfilePage ();
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