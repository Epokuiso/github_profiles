import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root
    {
        --dark-background-color: #393E46;
        --dark-text-color: #FFFFFF;
        --dark-border-color: #00ADB5;

        --light-background-color: #F1F3F4;
        --light-text-color: black;
        --light-border-color: black;

        --not-found-color: #FC4F4F;
    }
    
    *
    {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        outline: none;
    }

    html
    {
        @media (max-width: 430px)
        {
            font-size: 83.7%;
        }

        @media not (max-width: 430px)
        {
            font-size: 93.7%;
        }
    }

    body 
    {
        -webkit-font-smoothing: antialiased;
        background-color: ${ props => props.theme === 'dark' ? 'var(--dark-background-color)' : 'var(--light-background-color)'}; 
        height: 100vh;
        width: 100vw;
    }

    body, input, button
    {
        font-family: 'Roboto Slab', serif;
        font-weight: 300;
    } 

    a, button
    {
        cursor: pointer;
    }

    #root 
    {
        align-items: center;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
    }

    body, h1, h2, h3, p, div, button, img 
    {
        transition: color 750ms ease-in-out, background-color 750ms ease-in-out, border-color 750ms ease-in-out,
            padding 750ms ease-in-out;
    }
`;