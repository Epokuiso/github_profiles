import styled from "styled-components";

export const Container = styled.div`
    align-items: center;
    display: flex;
    margin: 3.6rem 1.2rem;

    > .search-input 
    {
        border: 2px solid var(--dark-border-color);
        border-radius: 5px;
        display: inherit;
        outline: none;

        > input[type='text'], > button
        {
            border: none;
            color: var(--dark-text-color);
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
            background-color: var(--dark-background-color);
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
            background-color: var(--dark-border-color);
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
        border: 6px solid #fff;
        border-color: #fff transparent #fff transparent;
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