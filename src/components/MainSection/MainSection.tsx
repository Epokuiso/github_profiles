import { useState } from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import { Title } from "../Title/Title";
import { UsageTip } from "../UsageTip/UsageTip";
import { Container, ErrorMessage } from "./styles";

export const MainSection = () => 
{
    const [foundUser, setFoundUser] = useState (true);
    return (
        <Container>
            <Title title='GitHub Profiles' />
            <UsageTip usageTip='Search for GitHub profiles using usernames.' />
            <SearchBar foundUser={foundUser} setFoundUser={setFoundUser} />
            {
                foundUser ? null : <ErrorMessage />
            }
        </Container>
    );
}