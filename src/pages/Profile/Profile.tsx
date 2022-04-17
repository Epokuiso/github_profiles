import { useContext } from "react"
import { Avatar } from "../../components/Avatar/Avatar"
import { StatusItem } from "../../components/StatusItem/StatusItem"
import { Username } from "../../components/Username/Username"
import { UserInformationContext } from "../../context/UserInformationContext"
import { Container, Status } from "./styles"

export const Profile = () =>
{
    const userInformationContext = useContext (UserInformationContext);

    return (
        <Container>
            <Avatar link={userInformationContext.profile_picture} />
            <Username profile_url={userInformationContext.profile_url} name={userInformationContext.username} />
            <Status>
                <StatusItem title="Followers" count={userInformationContext.followers} />
                <StatusItem title="Stars" count={userInformationContext.stars} />
                <StatusItem title="Repositories" count={0}/>
            </Status>
        </Container>
    )
}