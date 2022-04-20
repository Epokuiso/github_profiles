import styled from "styled-components";

export const Container = styled.main`
    color: ${ props => props.theme === 'dark' ? 'var(--dark-text-color)' : 'var(--light-text-color)'};
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 0 1.4rem;   
    
    > h1
    {
        font-size: 24px;    
        font-weight: 600;
        margin: 0 auto 0 auto;

        @media (min-width: 750px)
        {
            font-size: 32px;
        }
    }

    > h3
    {
        font-size: 14px;
        font-weight: 500;
        margin: 3.6rem auto 0 auto;

        @media (min-width: 750px)
        {
            font-size: 18px;
        }
    }

`;

export const ErrorMessage = styled.p`
    color: var(--not-found-color);
    font-size: 1.2rem;
    margin: 0 auto 0 auto;

    &::before
    {
        content: 'Error!Usename is invalid or was not found.';
    }

`