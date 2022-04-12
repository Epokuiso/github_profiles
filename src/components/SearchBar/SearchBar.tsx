import React, { useContext, useState } from "react";
import { getUserProfileInformation } from "../../api";
import { FoundUserContext } from "../../context/FoundUserContext";
import { UserInformation, UserInformationContext } from "../../context/UserInformationContext";
import { Container, Spinner } from "./styles";

export const SearchBar = () =>
{
    const [searching, setSearching] = useState (false);
    let foundUserContext = useContext (FoundUserContext);   
    let userInformationContext = useContext (UserInformationContext);
    
    const setUsername = (event: React.ChangeEvent<HTMLInputElement>) =>
    {
        if (!foundUserContext.foundUser) foundUserContext.setFoundUser (true);
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
        typeof userInformation.username === 'undefined' ? foundUserContext.setFoundUser (false) : foundUserContext.setFoundUser (true);
    }

    return (
        <Container>
            <div className={`search-input ${foundUserContext.foundUser ? '' : 'not-found'}`}>
                <input
                    className={`search-input-text  ${foundUserContext.foundUser ? '' : 'not-found'}`} 
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