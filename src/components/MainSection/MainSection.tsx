import { SearchBar } from "../SearchBar/SearchBar";
import { Title } from "../Title/Title";
import { UsageTip } from "../UsageTip/UsageTip";
import { Container } from "./styles";

export const MainSection = () => 
{
    return (
        <Container>
            <Title title='GitHub Profiles' />
            <UsageTip usageTip='Search for GitHub profiles using usernames.' />
            <SearchBar />
        </Container>
    );
}