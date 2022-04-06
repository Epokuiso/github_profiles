import { Container } from "./styles";

export const SearchBar = () =>
{
    return (
        <Container>
            <input type='text' name='username' placeholder='Enter a username' />
            <button>Search</button>
        </Container>
    );
}