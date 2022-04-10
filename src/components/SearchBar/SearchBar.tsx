import { useContext } from "react";
import { getUserProfileInformation } from "../../api";
import { UserInformationContext } from "../../context/UserInformationContext";
import { Container } from "./styles";

export const SearchBar = () =>
{
    const userInformationContext = useContext (UserInformationContext);
    
    const setUsername = (event: React.ChangeEvent<HTMLInputElement>) =>
    {
        userInformationContext.username = event.target.value;
    }

    const searchUsername = async () =>
    {
        console.log (await getUserProfileInformation (userInformationContext.username));
    }

    return (
        <Container>
            <input type='text' 
            name='username' 
            placeholder='Enter a username' 
            onChange={ event => setUsername (event) }
            />
            <button onClick={ async () => await searchUsername() }>Search</button>
        </Container>
    );
}