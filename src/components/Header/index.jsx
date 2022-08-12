import logo from '../../assets/logo.svg'
import { Nav } from './styled'

export default function Header() {
    return(

        <Nav>
            <div>
                <img src={logo} alt="Logo" />
            </div>

            <nav>
                <ul className="navbar-list">
                    <li className="navbar-item">
                        <a href="/" className="navbar-link">Como fazer</a>
                    </li>

                    <li className="navbar-item">
                        <a href="/" className="navbar-link">Ofertas</a>
                    </li>

                    <li className="navbar-item">
                        <a href="/" className="navbar-link">Depoimentos</a>
                    </li>

                    <li className="navbar-item">
                        <a href="/" className="navbar-link">Vídeos</a>
                    </li>

                    <li className="navbar-item">
                        <a href="/" className="navbar-link">Meu carrinho</a>
                    </li>
                </ul>
            </nav>
        </Nav>
    )
};