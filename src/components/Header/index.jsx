import logo from '../../assets/logo.svg';
import Nav from './Nav';

import { HeaderContainer } from './styled';

export default function Header() {
    return(
        <HeaderContainer>
            <div>
                <img src={logo} alt="Logo" />
            </div>

            <Nav />
        </HeaderContainer>
    )
};