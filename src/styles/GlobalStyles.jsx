import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        color: var(--primary-text);
    }
    :root {
        font-size: 62.5%;
        --white: #fff1f1;
        --yellow: #FFCB47;
        --green: #8DCE97;
        --primary-text: #202020;
    }
    html {
        scroll-behavior: smooth;
    }
    html, 
    body {
        height: 100%;
        width: 100%;
    }
    body {
        font-size: 1.6rem;
        background: var(--white);
        overflow-x: none;
    }
    ul {
        list-style: none
    }
    a {
        text-decoration: none;
    }
    button {
        border: none;
        background: none;
        cursor: pointer;
    }
    img {
        width: 100%;
    }
    h2::selection,
    h4::selection,
    p::selection,
    a::selection {
        background-color: var(--yellow);
        color: var(--primary-text);
    }
`;

export const Container = styled.div`
    max-width: 120rem;
    margin: 0 auto;
    padding: 1.2rem .5rem;
`;