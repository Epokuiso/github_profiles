import styled from "styled-components";

export const Container = styled.div`
    align-items: center;
    display: flex;
    margin: 3.6rem 1.2rem;

    > .search-input 
    {
        border: 2px solid ${props => props.theme === 'dark' ? 'var(--dark-border-color)' : 'var(--light-border-color)'};
        border-radius: 5px;
        display: inherit;
        outline: none;

        > input[type='text'], > button
        {
            border: none;
            color: ${props => props.theme === 'dark' ? 'var(--dark-text-color)' : 'var(--light-text-color)'};
            font-size: 14px;
            font-weight: 500;
            outline: none;

            @media (min-width: 750px)
            {
                font-size: 18px;
            }
        }

        > input[type='text']
        {
            background-color: ${props => props.theme === 'dark' ? 'var(--dark-background-color)' : 'var(--light-background-color)'};
            border-radius: inherit;
            padding: 1rem;

            &::placeholder
            {
                opacity: .75;
            }
            @media (min-width: 750px)
            {
                width: 320px;
            }

        }

        .search-input-text.not-found 
        {
            color: var(--not-found-color);
        }

        > button
        {
            ${props => props.theme === 'light' ? 'color: white;' : ''}
            background-color: ${props => props.theme === 'dark' ? 'var(--dark-border-color)' : 'var(--light-text-color)'};
            width: 97px;
        }
    }

    .search-input.not-found 
    {
        border-color: var(--not-found-color);
    }

`;

export const Spinner = styled.div`
    
    display: inline-block;
    height: 40px;
    margin: 0 .8rem;
    width: 40px;

    &::after 
    {
        animation: rotate 1.2s linear infinite;
        border-radius: 50%;
        border: 6px solid ${props => props.theme === 'dark' ? '#fff' : 'black'};
        border-color: ${props => props.theme === 'dark' ? '#fff' : 'black'} transparent ${props => props.theme === 'dark' ? '#fff' : 'black'} transparent;
        content: " ";
        display: block;
        height: 30px;
        width: 30px;
    }
    @keyframes rotate 
    {
        0% {
        transform: rotate(0deg);
        }
        100% {
        transform: rotate(360deg);
        }
    }
`;