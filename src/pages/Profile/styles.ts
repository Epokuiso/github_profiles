import styled from "styled-components";

export const Container = styled.main`
    align-items: center;
    display: inherit;
    flex-direction: column;

    > img 
    {
        border-radius: 100%;
        box-shadow: 0 0 0 2px var(--dark-background-color),
                    0 0 0 4px var(--dark-border-color);
        height: 119px;
        width: 120px;
    }

    > a:first-of-type 
    {
        color: var(--dark-text-color);
        font-size: 1.65rem;
        font-weight: bold;
        margin: 1.6rem 0;
        text-decoration: none;

        &:hover
        {
            text-decoration: underline;
        }
    }

    > h3
    {
        align-self: flex-start;
        color: var(--dark-text-color);
        margin: 1.2rem;
        font-size: 15px;
    }

    @media (min-width: 750px)
    {
        > img 
        {
            height: 110px;
            width: 110px;
        }

        > h3
        {
            font-size: 14px;
        }
    }
`;

export const Status = styled.div`
    display: inherit;
    min-width: 300px;
    justify-content: space-between;
    padding: 1.2rem;

    > span
    {
        align-items: center;
        border: 2px solid var(--dark-border-color);
        border-radius: 100%;
        color: var(--dark-text-color);
        display: flex;
        font-size: .9rem;
        font-weight: 600;
        flex-direction: column;
        height: 75px;
        justify-content: space-evenly;
        padding: 1rem;
        width: 76px;
    }

    @media (min-width: 750px)
    {
        width: 450px;

        > span
        {
            font-size: .99rem;
            height: 82px;
            transition: transform ease-in-out 500ms;
            width: 84px;

            &:hover 
            {
                transform: scale(1.04);
            }
        }
    }
`;

export const TopRepositories = styled.div`
    display: inherit;
    flex-direction: column;
    min-width: 370px;
    padding: 1.2rem;

    > div 
    {
        align-items: center;
        border: 2px solid var(--dark-border-color);
        border-radius: 5px;
        display: flex;
        font-size: 13px;
        justify-content: space-between;
        margin-bottom: .55rem;
        height: 56px;
        padding: 1rem;

        > a
        {
            color: var(--dark-text-color);
            text-decoration: none;

            &:hover
            {
                text-decoration: underline;
            }
        }

        > span
        {
            align-items: center;
            color: var(--dark-text-color);
            display: inherit;
            flex-direction: column;
        }

    }

    @media (min-width: 750px)
    {
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-between;
        width: 720px;

        > div 
        {
            transition: transform ease-in-out 500ms;
            width: calc(50% - 1rem);

            &:hover 
            {
                transform: scale(1.04);
            }
        }
    }
`;
