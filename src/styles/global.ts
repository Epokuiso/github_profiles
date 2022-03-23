import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    :root
    {
        --dark-background-color: #393E46;
    }
    
    *
    {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
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
        background-color: var(--dark-background-color);
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
`;