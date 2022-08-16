import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    max-width: 70%;
    margin-inline: auto;
    margin-bottom: 4.5rem;
    box-shadow: 0 0 70px rgba(0, 0, 0, 0.1);

    .content__texts {
        flex-basis: 40%;
        padding: 2.5rem;

        h4 {
            font-weight: 500;
        }
        
        h2 {
            font-family: 'Elsie Swash Caps', sans-serif;
            font-weight: 400;
            font-size: 3.8rem;
            margin: 1.2rem 0 3.2rem 0;
        }
    }
`;

export const ImageContainer = styled.div`
    flex-basis: 60%;
`;

export const MainContent = styled.div`
    padding: 0 0 1rem 0;

    .bubble__rounded {
        width: 50px;
        padding: 1px;
        height: 50px;
        border-radius: 100%;
        background-color: var(--yellow);
    }

    h4 {
        margin-bottom: 1rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 1.6rem;
        font-weight: 400;
    }
`;