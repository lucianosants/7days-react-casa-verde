import styled from 'styled-components';

export const Wrapper = styled.section`
    margin-bottom: 8rem;
`;

export const StyledOffer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 auto;
    width: 80%;
`;

export const OfferCard = styled.div`
    background-color: var(--white);
    box-shadow: 0 0 7rem rgba(0, 0, 0, 0.1);
    border: 1px solid var(--white);
    transition: all .3s ease-in-out;
    padding: 0.5rem 3rem 0 0;
    max-width: 30%;
    margin-bottom: 3rem;
    display: flex;
    align-items: center;
    flex-grow: 1;

    &:hover {
        box-shadow: 0 0 7rem rgba(0, 0, 0, 0.2);
        border: 1px solid var(--yellow);
        transition: all .3s ease-in-out;
    }
`;

export const ButtonBuy = styled.a`
    display: flex;
    align-items: center;
    gap: 1em;
    color: var(--yellow);
    border: 1px solid transparent;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    transition: all 0.3s linear;

    svg {
        fill: var(--yellow);
        transition: all 0.3s linear;
    }

    &:hover svg {
        fill: var(--white);
        transition: all 0.3s linear;
    }
    
    &:hover {
        color: var(--white);
        background-color: var(--yellow);
        transition: all 0.3s linear;
    }
`;

export const SubTitle = styled.h4`
    font-size: 2.2rem;
`;

export const Titles = styled.div`
    text-align: center;
    
`;

export const Title = styled.h2`
    font-family: 'Elsie Swash Caps', sans-serif;
    font-size: 8.2rem;
    margin: 1.2rem 0 0.8rem 0;
`;