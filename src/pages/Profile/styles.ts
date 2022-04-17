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
`;

export const Status = styled.div`
    display: inherit;
    min-width: 370px;
    justify-content: space-evenly;
    padding: 1.2rem;

    > span
    {
        align-items: center;
        border: 1px solid var(--dark-border-color);
        border-radius: 100%;
        color: var(--dark-text-color);
        display: flex;
        font-size: 1.1rem;
        font-weight: 600;
        flex-direction: column;
        height: 85px;
        justify-content: space-evenly;
        padding: 1rem;
        width: 87px;
    }

`;