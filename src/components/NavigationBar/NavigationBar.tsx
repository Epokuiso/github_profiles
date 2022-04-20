import { Container, ToggleSwitchTheme } from "./styles";
import Button from '../../assets/button.svg';
import DarkButton from '../../assets/button1.svg';
import { useNavigate } from "react-router-dom";
import { ToggleButton } from "../ToggleButton/ToggleButton";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

interface INavigationBarProps 
{
    resetData: () => void
}

export const NavigationBar = ({ resetData }: INavigationBarProps) => 
{
    const showGoBackButton = window.location.pathname === '/profile' ? true : false;
    const { name } = useContext (ThemeContext);
    let navigate = useNavigate ();

    

    return (
        <>
            <Container>
                { 
                    showGoBackButton ? 
                        <img src={ name === 'dark' ? Button : DarkButton } alt='Go Back' onClick={() => {resetData (); navigate('/')}} /> 
                        : 
                        null
                } 
                <ToggleSwitchTheme>
                    <ToggleButton  />
                    <span className="slider round"></span>  
                </ToggleSwitchTheme>    
            </Container>
        </>
    )
};