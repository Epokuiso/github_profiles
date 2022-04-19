import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { SearchBar } from "../SearchBar/SearchBar";
import { Title } from "../Title/Title";
import { UsageTip } from "../UsageTip/UsageTip";
import { Container, ErrorMessage } from "./styles";

export const MainSection = () => 
{
    const [foundUser, setFoundUser] = useState (true);
    const { name } = useContext (ThemeContext);

    return (
        <Container theme={name}>
            <Title title='GitHub Profiles' />
            <UsageTip usageTip='Search for GitHub profiles using usernames.' />
            <SearchBar foundUser={foundUser} setFoundUser={setFoundUser} />
            {
                foundUser ? null : <ErrorMessage />
            }
        </Container>
    );
}