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
`;

export const Status = styled.div`
    display: inherit;
    min-width: 370px;
    justify-content: space-between;
    padding: 1.2rem;

    > span
    {
        align-items: center;
        border: 2px solid var(--dark-border-color);
        border-radius: 100%;
        color: var(--dark-text-color);
        display: flex;
        font-size: 1.1rem;
        font-weight: 600;
        flex-direction: column;
        height: 89px;
        justify-content: space-evenly;
        padding: 1rem;
        width: 90px;
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
        min-height: 46px;
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

`;
