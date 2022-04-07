import { FormEvent, useContext } from "react";
import { UserInformationContext } from "../../context/UserInformationContext";
import { Container } from "./styles";

export const SearchBar = () =>
{
    const userInformationContext = useContext (UserInformationContext);
    
    const setUsername = (event: React.ChangeEvent<HTMLInputElement>) =>
    {
        userInformationContext.username = event.target.value;
    }

    return (
        <Container>
            <input type='text' 
            name='username' 
            placeholder='Enter a username' 
            onChange={ event => setUsername (event) }
            />
            <button>Search</button>
        </Container>
    );
}