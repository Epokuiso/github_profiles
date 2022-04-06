import styled from "styled-components";

export const Container = styled.div`
    border: 2px solid var(--dark-border-color);
    border-radius: 5px;
    display: flex;
    margin: 3.6rem auto 0 auto;
    outline: none;

    > input[type='text'], > button
    {
        border: none;
        color: var(--dark-text-color);
        font-size: 14px;
        font-weight: 600;
        outline: none;
    }

    > input[type='text']
    {
        background-color: var(--dark-background-color);
        border-radius: inherit;
        padding: 1rem;

        &::placeholder
        {
            opacity: .8;
        }
    }

    > button
    {
        background-color: var(--dark-border-color);
        width: 97px;
    }
`;