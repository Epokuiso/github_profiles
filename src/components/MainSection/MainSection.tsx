import { useState } from "react";
import { FoundUserContext } from "../../context/FoundUserContext";
import { SearchBar } from "../SearchBar/SearchBar";
import { Title } from "../Title/Title";
import { UsageTip } from "../UsageTip/UsageTip";
import { Container } from "./styles";

export const MainSection = () => 
{
    const [foundUser, setFoundUser] = useState (true);
    return (
        <FoundUserContext.Provider value={{foundUser, setFoundUser}}>
            <Container>
                <Title title='GitHub Profiles' />
                <UsageTip usageTip='Search for GitHub profiles using usernames.' />
                <SearchBar />
            </Container>
        </FoundUserContext.Provider>
    );
}