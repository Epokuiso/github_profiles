import { Container } from "./styles";
import Button from '../../assets/button.svg';
import { useContext } from "react";
import { defaultState, UserInformationContext } from "../../context/UserInformationContext";
import { RepositoriesInformationContext } from "../../context/RepositoriesInformationContext";
import { useNavigate } from "react-router-dom";

export const NavigationBar = () => 
{
    const showGoBackButton = window.location.pathname === '/profile' ? true : false,
    userInformationContext = useContext (UserInformationContext),
    repositioriesContext = useContext (RepositoriesInformationContext);

    let navigate = useNavigate ();

    const resetUserInformationContext = () =>
    {
        userInformationContext.username = defaultState.username;
        userInformationContext.followers = defaultState.followers;
        userInformationContext.following = defaultState.following;
        userInformationContext.stars = defaultState.stars;
        userInformationContext.profile_picture = defaultState.profile_picture;
        userInformationContext.profile_url = defaultState.profile_url;
    }

    const resetRepositoriesContext = () =>
    {
        repositioriesContext.forEach (repo => {
            repositioriesContext.pop()
        });
        repositioriesContext.pop ();
    }

    const resetContexts = () =>
    {
        resetUserInformationContext ();
        resetRepositoriesContext ();
        navigate ('/')
    }

    return (
        <>
            <Container>
                { showGoBackButton ? 
                    <img src={Button} alt='Go Back' onClick={async () => resetContexts ()}/> 
                        : 
                    null 
                } 
            </Container>
        </>
    )
};