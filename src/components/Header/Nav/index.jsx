import { Navbar, List } from './styled';

export default function Nav() {
    return(
        <>
            <nav>
                <Navbar>
                    <List className="navbar-item">
                        <a href="/" className="navbar-link">Como fazer</a>
                    </List>

                    <List className="navbar-item">
                        <a href="/" className="navbar-link">Ofertas</a>
                    </List>

                    <List className="navbar-item">
                        <a href="/" className="navbar-link">Depoimentos</a>
                    </List>

                    <List className="navbar-item">
                        <a href="/" className="navbar-link">Vídeos</a>
                    </List>

                    <List className="navbar-item">
                        <a href="/" className="navbar-link">Meu carrinho</a>
                    </List>
                </Navbar>
            </nav>
        </>
    )
};