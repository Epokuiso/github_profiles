import { Container, ToggleSwitchTheme } from "./styles";
import Button from '../../assets/button.svg';
import { useContext } from "react";
import { defaultState, UserInformationContext } from "../../context/UserInformationContext";
import { RepositoriesInformationContext } from "../../context/RepositoriesInformationContext";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";

export const NavigationBar = () => 
{
    const showGoBackButton = window.location.pathname === '/profile' ? true : false;
    const userInformationContext = useContext (UserInformationContext);
    const repositioriesContext = useContext (RepositoriesInformationContext);
    const themeContext = useContext(ThemeContext);

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
        while (repositioriesContext.length !== 0) 
        {    repositioriesContext.pop(); }
           
    }

    const resetContexts = () =>
    {
        resetUserInformationContext ();
        resetRepositoriesContext ();
        navigate ('/'); 
    }

    const toggleTheme = () =>
    {
        themeContext.name === 'dark' ? themeContext.setTheme ('light') : themeContext.setTheme ('dark');
    }

    return (
        <>
            <Container>
                { 
                    showGoBackButton ? <img src={Button} alt='Go Back' onClick={() => resetContexts ()} /> : null
                } 
                <ToggleSwitchTheme>
                {
                    themeContext.name === 'dark' ? 
                        <input type="checkbox" onClick={() => toggleTheme ()} defaultChecked />
                        : 
                        <input type="checkbox" onClick={() => toggleTheme ()} />
                }
                    <span className="slider round"></span>  
                </ToggleSwitchTheme>    
            </Container>
        </>
    )
};