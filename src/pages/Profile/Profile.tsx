import { useContext } from "react"
import { Avatar } from "../../components/Avatar/Avatar"
import { RepositoryItem } from "../../components/RepositoryItem/RepositoryItem"
import { StatusItem } from "../../components/StatusItem/StatusItem"
import { Username } from "../../components/Username/Username"
import { RepositoriesInformationContext } from "../../context/RepositoriesInformationContext"
import { UserInformationContext } from "../../context/UserInformationContext"
import { Container, Status, TopRepositories } from "./styles"

export const Profile = () =>
{
    const userInformationContext = useContext (UserInformationContext);
    const repositoriesContext = useContext (RepositoriesInformationContext);

    return (
        <Container>
            <Avatar link={userInformationContext.profile_picture} />
            <Username profile_url={userInformationContext.profile_url} name={userInformationContext.username} />
            <Status>
                <StatusItem title="Followers" count={userInformationContext.followers} />
                <StatusItem title="Stars" count={userInformationContext.stars} />
                <StatusItem title="Repositories" count={userInformationContext.repos }/>
            </Status>
            <h3>Top Repositories</h3>
            <TopRepositories>
            {
                repositoriesContext.map ((repository, index) =>  
                    <RepositoryItem 
                        key={index}
                        name={repository.name} 
                        stargazers_count={repository.stargazers_count}
                        url={repository.url} />    
                )   
            }
            </TopRepositories>
        </Container>
    )
}