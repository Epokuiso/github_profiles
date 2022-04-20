import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";

export const ToggleButton = () =>
{
    const themeContext = useContext (ThemeContext);
    let navigate = useNavigate ();

    useEffect (() => {
        const button = document.querySelector ('.toggle-button');
        button?.addEventListener ('click', () => {
            themeContext.setTheme ();
            navigate('/');
        });
    }, [themeContext, navigate])

    return (
        <>
        {
            themeContext.name === 'dark' ? 
                <input className='toggle-button' type="checkbox" defaultChecked />
                : 
                <input className='toggle-button' type="checkbox"  />
        }
        </>
    ); 
}