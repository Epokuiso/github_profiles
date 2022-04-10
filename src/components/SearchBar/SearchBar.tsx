import React, { useContext, useState } from "react";
import { getUserProfileInformation } from "../../api";
import { UserInformationContext } from "../../context/UserInformationContext";
import { Container } from "./styles";

export const SearchBar = () =>
{
    const [found, setFound] = useState (true);
    let userInformationContext = useContext (UserInformationContext);
    
    const setUsername = (event: React.ChangeEvent<HTMLInputElement>) =>
    {
        userInformationContext.username = event.target.value;
    }

    const pressedKey = async (key: React.KeyboardEvent<HTMLInputElement>) =>
    {
        key.code === 'Enter' ? await searchUsername(): await null;
    }

    const searchUsername = async () =>
    {
        userInformationContext = await getUserProfileInformation (userInformationContext.username);
        console.log (userInformationContext);
    }



    return (
        <Container>
            <input type='text' 
            name='username' 
            placeholder='Enter a username' 
            onChange={ event => setUsername (event) }
            onKeyUp={ event => pressedKey (event) }
            />
            <button onClick={ async () => await searchUsername() }>Search</button>
        </Container>
    );
}