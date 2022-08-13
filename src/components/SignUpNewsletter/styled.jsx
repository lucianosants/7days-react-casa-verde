import styled from 'styled-components';

export const Newsletter = styled.section`
    display: flex;
    align-items: center;

    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border-width: 0;
    }

    svg {
        fill: var(--secondary-text);
        opacity: 0.5;
        position: absolute;
        top: 2.1rem;
        left: 1.5rem;
    }

    .email-input {
        border: none;
        outline: none;
        background: transparent;
        width: 100%;
        padding-left: 2.5rem;
        padding: 1rem 1rem 1rem 4rem;
        height: 100%;
        border: 1px solid transparent;
    }

    .email-input[type=email]:focus {
        border: 1px solid var(--yellow);
    }

    .float-bubble {
        position: absolute;
        top: 0;
        right: 0;
        z-index: -1;
        max-width: 79rem;
        height: auto;
    }
`;


export const ColA = styled.section`
    display: flex;
    flex-basis: 40%;
`;

export const ColB = styled.section`
    display: flex;
    flex-basis: 60%;
`;

export const FormArea = styled.form`
    display: flex;
    box-shadow: 0px 0px 8px -3px rgb(0 0 0 / 70%);
    font-size: 1.8rem;
`;

export const EmailContainer = styled.div`
    background-color: var(--white);
    display: flex;
    align-items: center;
    width: 52rem;
    gap: .5rem;
    flex-basis: 60%;
    position: relative;
`;

export const Button = styled.button`
    background-color: var(--yellow);
    padding: 2rem 1rem;
    color: #fff;
    font-size: 1.6rem;
    font-weight: 600;
    border: 2px solid var(--yellow);
    transition: .3s;
    flex-basis: 40%;

    &:hover {
        background-color: transparent;
        color: var(--yellow);
    }
`;

export const Subtitle = styled.h4`
    opacity: 0.8;
    font-size: 2.2rem;
    margin-bottom: 1.2rem;
`;

export const Title = styled.h2`
    font-family: 'Elsie Swash Caps';
    font-size: 8.2rem;
`;

export const TextContent = styled.p`
    line-height: 2.6rem;
    opacity: 0.8;
    margin-block: 2.5rem 3.5rem;
    padding-right: 9rem;
`;
