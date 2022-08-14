import styled from 'styled-components';

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
`;

export const ButtonSuccess = styled.button`
    background-color: var(--yellow);
    padding: 2rem 1rem;
    color: var(--white);
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

export const Button = styled.button`
    background-color: var(--yellow);
    opacity: 0.7;
    cursor: not-allowed;
    padding: 2rem 1rem;
    color: var(--white);
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

export const ErrorContainer = styled.section`
    position: relative;
    padding: 1rem 0;
`;

export const Error = styled.span`
    color: red;
    margin: 1rem 0;
    display: inline-block;
    font-size: 1.3rem;
    background-color: #fade;
    padding: 1rem .5rem;
    border-radius: 7px;

    &::before {
        background: red;
        content: '';
        position: absolute;
        padding: 0.3rem 0.9rem;
        -webkit-clip-path: polygon(50% 0,0% 100%,100% 100%);
        clip-path: polygon(50% 0,0% 100%,100% 100%);
        top: 9px;
    }
`;
