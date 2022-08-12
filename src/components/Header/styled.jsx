import styled from 'styled-components'

export const Nav = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    .navbar-list {
        display: flex;
        gap: 1rem;
    }

    .navbar-list .navbar-link:hover {
        color: var(--white);
        transition: .3s;
        text-decoration: underline 2px dashed;
    }

    .navbar-item:nth-child(-n + 4)::after {
        content: '/';
        margin-left: 1rem
    }

`;