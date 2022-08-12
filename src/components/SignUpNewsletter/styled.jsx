import styled from 'styled-components';

export const Newsletter = styled.section`
    display: flex;
    align-items: center;

    .col-a {
        display: flex;
        flex-basis: 40%;
    }

    .col-b {
        display: flex;
        flex-basis: 60%;
    }

    .form-area {
        display: flex;
        box-shadow: 0px 0px 8px -3px rgb(0 0 0 / 70%);
        font-size: 1.8rem;
    }

    .input-container {
        background-color: var(--white);
        padding: 1rem;
        display: flex;
        align-items: center;
        width: 52rem;
        gap: .5rem;
        flex-basis: 60%;
    }
    
    .btn {
        flex-basis: 40%;
    }

    svg {
        fill: var(--secondary-text);
    }

    .email-input {
        border: none;
        outline: none;
        background: transparent;
    }

    .subtitle {
        opacity: 0.5;
        font-size: 2.2rem;
        margin-bottom: 1.2rem;
    }

    .title {
        font-family: 'Elsie Swash Caps';
        font-size: 8.2rem
    }

    .text-content {
        line-height: 2.6rem;
        opacity: 0.5;
        margin-block: 2.5rem 3.5rem;
        padding-right: 9rem;
    }

    .float-bubble {
        position: absolute;
        top: 0;
        right: 0;
        z-index: -1;
        max-width: 79rem;
    }

`;