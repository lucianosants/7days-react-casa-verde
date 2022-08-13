import styled from 'styled-components'

export const Navbar = styled.ul`
    display: flex;
    gap: 1rem;
`;

export const List = styled.li`
    display: flex;
    gap: 1rem;

    .navbar-link {
        padding: .5rem;
        border-radius: 7px;
    }
    
    .navbar-link:hover {
        color: var(--primary-text);
        transition: .3s;
        background-color: var(--green);
    }
    
    &:nth-child(-n + 4)::after {
        content: '/';
        margin-left: 1rem;
        padding: .5rem 0;
    }
`;