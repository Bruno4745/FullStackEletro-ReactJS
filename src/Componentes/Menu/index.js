import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import './Menu.css';

function BaseMenu(props){
    const { location } = props;
    return(
        <Navbar className="navbar-dark" expand="lg" sticky="top" id="Menu">    
            <Container>
                <Navbar.Brand as={Link} href="/" to="/"><img className="imgMenu" src={require(`./logo.png`).default} alt="Logo"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav activeKey={location.pathname} className="ml-auto active">
                        <Nav.Item className="mx-auto">
                            <Nav.Link as={Link} href="/produtos" to="/produtos">Produtos</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="mx-auto">
                            <Nav.Link as={Link} href="/pedidos" to="/pedidos">Pedidos</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="mx-auto">
                            <Nav.Link as={Link} href="/lojas" to="/lojas">Nossas Lojas</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="mx-auto">
                            <Nav.Link as={Link} href="/contato" to="/contato">Contato</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>    
            </Container>
        </Navbar>
    )
}

const Menu = withRouter(BaseMenu);

export default Menu;