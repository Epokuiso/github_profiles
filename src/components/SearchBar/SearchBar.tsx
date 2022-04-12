import React, { useContext, useState } from "react";
import { getUserProfileInformation } from "../../api";
import { UserInformation, UserInformationContext } from "../../context/UserInformationContext";
import { Container, Spinner } from "./styles";

export const SearchBar = () =>
{
    const [found, setFound] = useState (true);
    const [searching, setSearching] = useState (false);
    let userInformationContext = useContext (UserInformationContext);
    
    const setUsername = (event: React.ChangeEvent<HTMLInputElement>) =>
    {
        if (!found) setFound (true);
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

    const checkUserFound = (userInformation: UserInformation) =>
    {
        typeof userInformation.username === 'undefined' ? setFound (false) : setFound (true);
    }

    return (
        <Container>
            <div className={`search-input ${found ? '' : 'not-found'}`}>
                <input
                className={`search-input-text  ${found ? '' : 'not-found'}`} 
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